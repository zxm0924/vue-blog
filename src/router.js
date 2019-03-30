import Blog from './components/Bolg'
import Showblog from './components/Showblog'
import Delete from './components/delete'

export default [{
    path: "/",
    component: Showblog
  },
  {
    path: "/Blog",
    component: Blog
  },
  {
    path: "/Delete/:id",
    component: Delete
  }
]
