<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React no Laravel com Laravel Mix</title>
</head>
<body>
    <div id="website"></div>
    
    <!-- Inclua o JS compilado -->
    <script src="{{ mix('js/website.js') }}"></script>
</body>
</html>
