import React, { Component } from 'react'
import { Link } from 'react-router'

class Establishment extends Component {

    render() {

        let id = this.props.establishment.id
        let url = "/happyhour/" + id
        let upIcon      = <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        let downIcon    = <i className="fa fa-thumbs-down" aria-hidden="true"></i>

        let starIcon    = <i className="fa fa-star-o" aria-hidden="true"></i>


        if(!this.props.establishment.isLiked)
            upIcon = <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>

        if(!this.props.establishment.isDisliked)
            downIcon = <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>

        if (this.props.establishment.favori) {
            starIcon = <i className="fa fa-star favoriIcon" aria-hidden="true"></i>
        }


        return (
            <div className='establishment' >
                <div className='establishment-favori' >
                    <button onClick={() => this.props.favori(id)}>{ starIcon }</button>
                </div>
                <div className='establishment-description' >
                    <h3>{ this.props.establishment.name }</h3>

                    <div>
                        { this.props.establishment.description }
                    </div>

                    <div>
                        <Link to={url}>Voir l'happy-hour</Link>
                    </div>


                </div>
                <div className='establishmentLikeDislike' >
                    <button onClick={() => this.props.like(id)}>{ upIcon } </button> <span>{ this.props.establishment.likeCounter }</span>
                    <button onClick={() => this.props.dislike(id)}>{ downIcon }</button> <span>{ this.props.establishment.dislikeCounter }</span>
                </div>


            </div>
        );
    }
}

export default Establishment;
