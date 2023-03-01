export const routes =[
    {
        path: '',
        title: 'SignIn',
        component: 'Signin',
        privatePath:false
      },
      {
        path: 'profile',
        title: 'Profile',
        component: 'Profile',
        privatePath: true,
        subNav:[
          {
            path: 'name',
            title: 'Name',
            component: 'Name',
            privatePath: true
          }
        ]
      }
]