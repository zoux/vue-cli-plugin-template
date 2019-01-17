export default [
  {
    path: '/b',
    name: 'b',
    meta: {
      title: 'b'
    },
    component: () => import('@/views/b/index.vue'),
    children: [
      {
        path: 'x',
        name: 'b-x',
        meta: {
          title: 'b-x'
        },
        component: () => import('@/views/b/x.vue')
      }
    ]
  }
]
