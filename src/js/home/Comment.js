import React from 'react'

import avatar from '../../img/home/avatar.png'

class Comment extends React.Component
{
    render()
    {
        let comment = this.props.commento
        let time = comment.time.split(' ')
        
        return(
            <div class="card flex-row flex-wrap">
                <div class="card-header col-2">
                    <img src={avatar} alt="generic-profile" className="comment-picture" />
                </div>

                <div class="card-block col-10 comment-body">
                    <h4 class="card-title">{comment.name}</h4>
                    <p class="card-text">{comment.body}</p>
                </div>
                
                <div class="card-footer w-100 text-muted comment-footer">
                    commented on {time[2]}-{time[1]}-{time[3]} at {time[4]} 
                </div>
            </div>
        )
    }
}

export default Comment