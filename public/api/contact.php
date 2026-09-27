<?php
/**
 * Hostinger-compatible contact form endpoint.
 * Set CONTACT_TO_EMAIL in the server environment or edit $to below before deploy.
 * Returns JSON for the Astro contact form fetch() client.
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Honeypot
if (!empty($_POST['botcheck'])) {
    echo json_encode(['success' => true]);
    exit;
}

function field(string $key, int $max = 500): string {
    $value = isset($_POST[$key]) ? trim((string) $_POST[$key]) : '';
    $value = strip_tags($value);
    if (strlen($value) > $max) {
        $value = substr($value, 0, $max);
    }
    return $value;
}

$name = field('name', 100);
$email = field('email', 120);
$company = field('company', 120);
$projectType = field('project_type', 80);
$platform = field('platform', 80);
$odooVersion = field('odoo_version', 40);
$integration = field('integration', 160);
$description = field('description', 4000);
$budget = field('budget', 60);
$timeline = field('timeline', 60);

$errors = [];
if ($name === '') {
    $errors[] = 'Name is required';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Valid email is required';
}
if ($projectType === '') {
    $errors[] = 'Project type is required';
}
if (strlen($description) < 20) {
    $errors[] = 'Project description is too short';
}

if ($errors) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => implode('; ', $errors)]);
    exit;
}

$to = getenv('CONTACT_TO_EMAIL') ?: 'gultajkhan980@gmail.com';
$subject = 'New Odoo project inquiry from ' . $name;
$body = "Name: {$name}\n"
    . "Email: {$email}\n"
    . "Company: {$company}\n"
    . "Project Type: {$projectType}\n"
    . "Platform: {$platform}\n"
    . "Odoo Version: {$odooVersion}\n"
    . "Integration: {$integration}\n"
    . "Budget: {$budget}\n"
    . "Timeline: {$timeline}\n\n"
    . "Description:\n{$description}\n";

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Website Contact <noreply@' . ($_SERVER['HTTP_HOST'] ?? 'localhost') . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Unable to send message']);
    exit;
}

echo json_encode(['success' => true]);
