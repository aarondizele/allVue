export const fruitsMixin = {
  data () {
    return {
      msg: 'Built-in Directives',
      fruits: ['Apple', 'Tomato','Ananas', 'Marlon', 'Strawberry', 'Kiwi'],
      filterText: '',
      notFoundSearch: false
    }
  },
  computed: {
      fruitFiltered () {
          return this.fruits.filter((value) => {
            return value.toLowerCase().match(this.filterText.toLowerCase());
        });
      }
  },
}
