import templateMixin from '@mixins/templateMixin';
import { Fragment } from 'vue-fragment';
import RowCmp from '@cmp/RowCmp';

export default {
  name: 'OccasionCard',
  mixins: [templateMixin],
  components: {
    Fragment,
    RowCmp,
  },
  render(h) {
    return h(
      'article',
      {
        class: 'col col-sm-12' + this.classes,
      },
      this.title ? this.withTitleContent() : this.withoutTitleContent(),
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
        ? this.colClasses[4] + ' card bg-white occasions-card'
        : this.colClasses[6];
    },
  },
  methods: {
    withTitleContent() {
      return (
        <fragment>
          <div class="icon"></div>
          <p> {this.desc} </p>
        </fragment>
      );
    },
    withoutTitleContent() {
      // figure.img_wrap(v-if='title')
      return (
        <fragment>
          <img
            class="img_wrap-img occasions-img"
            src={this.pathes.img + '/occasions/' + this.imgTitle + '.jpg'}
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
  },
};
