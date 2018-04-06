/**
 * Main Script -- Copyright: Joachim Cardoen
 * Modify to own liking
 */

class Paginator {
    constructor(itemSelector, listSelector, displayCount) {
        this.itemSelector = itemSelector;
        this.listSelector = listSelector;
        this.displayCount = displayCount;
    }
    setPagination() {
        const listSelector = document.querySelector(this.listSelector);
        while(listSelector.firstChild) {
            listSelector.removeChild(listSelector.firstChild);
        }

        const range = document.querySelectorAll(this.itemSelector).length / this.displayCount;

        for (var i = 0; i < range; i++) {
            let listItem = document.createElement('li');
            let anchor = document.createElement('a');
            anchor.classList.add('js-pagination');
            anchor.setAttribute('data-pagination', i * this.displayCount);
            anchor.innerText = i + 1;
            listItem.appendChild(anchor);
            listSelector.appendChild(listItem);
        }
    }

    hideAll() {
        const items = document.querySelectorAll(this.itemSelector);
        items.forEach(item => {
            item.style.display = 'none';
            item.style.opacity = '0';
        });
    }

    display(offset) {
        this.hideAll();
        for (var i = 0; i < this.displayCount; i++) {
            document.querySelectorAll(this.itemSelector)[i + offset].style.display = 'initial';
            document.querySelectorAll(this.itemSelector)[i + offset].style.opacity = '100';
        }
    }

    setListener() {
        let self = this;
        const anchors = document.querySelectorAll('.js-pagination');

        anchors.forEach( anchor => {
            anchor.addEventListener('click', event => {
                document.querySelector('.js-pagination-active').classList.remove('js-pagination-active');
                event.target.classList.add('js-pagination-active');
                self.display(parseInt(event.target.getAttribute('data-pagination')));
            })
        });
    }

    init() {
        this.setPagination();
        document.querySelector(this.listSelector).firstChild.firstChild.classList.add('js-pagination-active');
        this.setListener();
        this.display(0);
    }
}