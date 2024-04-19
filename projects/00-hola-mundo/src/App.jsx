import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


const users = [
    {

        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'pacohezs',
        name: 'Paco Hdez.',
        isFollowing: true
    },

]

export function App () {
    return (
        <section className='App'>
            {
                users.map(user => {
                    const {userName, name, isFollowing, key} = user
                    return(
                        <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsfollowing={isFollowing}
                >
                    {name}
                </TwitterFollowCard>                    )
                })
            }
        </section>
    )
}