## Vanilla JS Pagination

### Description

This is a very barefoot pagination lib, functioning as a boilerplate for your pagination usage. Style to your own liking, feel free to edit the lib (it is very small).
ES6 syntax is provided in the script.

### Simple usage:

1. Import script using <script src="PATH_TO/pagination.js"></script>
2. Initialize the pagination:
```
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            new Paginator('.item', '.paginationlist', 10).init();
        })
    </script>
```
3. Provide an item selector, a ul selector (put empty <ul> with a class in your html) and a displayCount (how many items you'd like to display)
4. Style it