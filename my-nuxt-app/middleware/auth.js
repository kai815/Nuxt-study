import Cookies from 'universal-cookie'

export default ({ req, route, redirect }) => {
    console.log(route.path)
    if(['/'].includes(route.path)){
        return
    }
    const cookies = req ? new Cookies(req.headers.cookie) : new Cookies()
    const cresential = cookies.get('credential')
    
    if (cresential && route.path === '/login'){
        return redirect('/')
    }
    if (!cresential && route.path !== '/login'){
        return redirect('/login')
    }
}