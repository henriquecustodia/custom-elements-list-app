(function () {

    var itemComponent = {
        props: [
            'data'
        ],
        template: '<li>{{ data.text }}</li>',
    }

    var listItemComponent = {
        components: {
            'my-list-item': itemComponent
        },
        props: [
            'data'
        ],
        data: function () {
            return {
                items: []
            }
        },
        watch: {
            data: function (newValue) {
                this.items = (newValue || []).slice();
            }
        },
        template: '<ul>' +
            '<my-list-item v-for="(item, index) in items" :data="item" :key="index"></my-list-item>' +
            '</ul>'
    }

    Vue.customElement('my-list', listItemComponent);

})();