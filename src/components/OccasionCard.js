import commonMixin from '@mixins/commonMixin';
import { Fragment } from 'vue-fragment';
import RowCmp from '@cmp/RowCmp';

export default {
  name: 'OccasionCard',
  mixins: [commonMixin],
  components: {
    Fragment,
    RowCmp,
  },
  render(h) {
    return h(
      'article',
      {
        // class: 'col col-sm-12' + this.classes,
        class: this.classes,
      },
      [this.title ? this.withTitleContent(h) : this.withoutTitleContent(h)],
    );
  },
  props: {
    imgTitle: { type: String, required: true },
    title: { type: String, default: '' },
  },
  data() {
    return {
      desc:
        'Опис основних випадків, в котрих сервіс буде корисним, і з якими частіше за все стикаються наші користувачі',
    };
  },
  computed: {
    classes() {
      return this.title
        ? // ? ` ${this.colClasses[4]} card bg-white occasions-card`
          ` card bg-white occasions-card`
        : ` ${this.colClasses[6]}`;
    },
  },
  methods: {
    withTitleContent() {
      return (
        <fragment>
          <img
            class="img_wrap-img occasions-img"
            src={require('@assets/img/occasions/' + this.imgTitle + '.jpg')}
            alt={this.imgTitle}
          />
          <section class="card-body">
            <h3 class="section-title section-title--sub occasions-title">
              {this.title}
            </h3>
            <p> {this.desc} </p>
          </section>
        </fragment>
      );
    },
    withoutTitleContent() {
      return (
        <fragment>
          <div class="icon"></div>
          <p> {this.desc} </p>
        </fragment>
      );
    },
  },
};
