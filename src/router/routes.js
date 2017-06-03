import Header from '@/components/Header'
import CountryApp from '@/components/countryApp'

// lazy loading User Group
const User = resolve => {
  require.ensure(['@/components/User.vue'], () => {
    resolve(require('@/components/User.vue'));
  }, 'user');
};

const UserDetail = resolve => {
  require.ensure(['@/components/UserDetail.vue'], () => {
    resolve(require('@/components/UserDetail.vue'));
  }, 'user');
};

const UserEdit = resolve => {
  require.ensure(['@/components/UserEdit.vue'], () => {
    resolve(require('@/components/UserEdit.vue'));
  }, 'user');
};

// lazy loading Forms
const Forms = resolve => {
  require.ensure(['@/components/Forms.vue'], () => {
    resolve(require('@/components/Forms.vue'));
  }, 'user');
};

// lazy loading Hello
const Hello = resolve => {
  require.ensure(['@/components/Hello.vue'], () => {
    resolve(require('@/components/Hello.vue'));
  }, 'user');
};


export const routes = [
  {path: '/', name: 'countryApp', component: CountryApp },
  { path: '/hello', name: 'hello', components: {
    default: Hello,
    'header-top': Header
  } },
  // { path: '/apply-now/:id', name: 'forms', component: Forms},
  { path: '/apply-now/:id', name: 'forms', components: {
    default: Forms,
    'header-top': Header,
    'header-bottom': Header
  }},
  { path: '/user', component: User, children: [
      { path: ':id', component: UserDetail,
        // beforeEnter: (to, from, next) => {
        //   next();
        //   console.log('inside beforeEnter');
        // }
      },
      { path: ':id/edit', name: 'editUser', component: UserEdit },
    ]
  },{ path: '*', redirect: '/' }
];
