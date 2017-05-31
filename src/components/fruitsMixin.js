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
        let matcher;
          return this.fruits.filter((value) => {
          return matcher = value.toLowerCase().match(this.filterText.toLowerCase());
        });
      }
  },
}
