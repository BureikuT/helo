import React,{Component} from 'react'

class Dashboard extends Component {
    constructor(){
        super()
        this.state={
            search:''

        }
    }


render(){
    return(
        <div>
<button>Search</button>
<button>Reset</button>


        </div>
    )
}
}

export default Dashboard