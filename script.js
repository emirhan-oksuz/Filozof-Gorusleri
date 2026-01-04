fetch('src/links.json')
        .then(r => r.json())
        .then(data => {
            document.querySelectorAll('img[data-name]').forEach(img => {
                const key = img.getAttribute('data-name');
                if (data[key]) img.src = data[key];
            });
        });