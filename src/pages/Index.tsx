
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PeakPath</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .hero {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            position: relative;
            overflow: hidden;
            background-image: url('https://images.unsplash.com/photo-1469474968028-56623f02e42e');
            background-size: cover;
            background-position: center;
        }

        .overlay {
            position: absolute;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.4);
        }

        .content {
            position: relative;
            z-index: 10;
            text-align: center;
            animation: fadeIn 0.5s ease-out;
        }

        .title {
            font-size: 4rem;
            font-weight: bold;
            color: white;
            margin-bottom: 1.5rem;
        }

        .description {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 2rem;
            max-width: 28rem;
        }

        .button {
            display: inline-block;
            padding: 1.5rem 2rem;
            font-size: 1.125rem;
            color: white;
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 0.5rem;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .button:hover {
            transform: scale(1.05);
        }

        .button:active {
            transform: scale(0.95);
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @media (min-width: 768px) {
            .title {
                font-size: 5rem;
            }
        }
    </style>
</head>
<body>
    <div class="hero">
        <div class="overlay"></div>
        <div class="content">
            <h1 class="title">PeakPath</h1>
            <p class="description">Your personalized guide to mountain adventures</p>
            <a href="/input" class="button">Begin Your Journey</a>
        </div>
    </div>
</body>
</html>
