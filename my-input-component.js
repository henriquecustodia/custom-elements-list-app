(function () {

    var inputComponent = {
        props: [
            'value'
        ],
        data: function () {
            return {
                internalValue: ''
            };
        },
        mounted: function () {
            this.inputFocus();
        },
        watch: {
            value: function (newValue) {
                this.internalValue = newValue;
            }
        },
        methods: {
            onEnter: function () {
                this.onAdd();
            },
            onAdd: function () {
                if (!this.internalValue) {
                    return;
                }

                this.$emit('onSubmit', this.internalValue);
                this.clearInput();
            },
            clearInput: function () {
                this.$refs.input.value = '';
            },
            inputFocus: function () {
                this.$refs.input.focus();
            }
        },
        template: '<div>' +
            '<input ref="input" placeholder="Add a name" v-model="internalValue" @keydown.enter="onEnter" />' +
            '<button @click="onAdd">Add</button>' +
            '</div>'
    }

    Vue.customElement('my-input', inputComponent);

})();