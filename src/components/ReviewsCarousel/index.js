import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeUserId: 0}

  onClickLeftArrow = () => {
    const {activeUserId} = this.state
    if (activeUserId > 0) {
      this.setState(prevState => ({activeUserId: prevState.activeUserId - 1}))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickRigthArrow = () => {
    const {activeUserId} = this.state
    const {reviewsList} = this.props

    if (activeUserId < reviewsList.length - 1) {
      this.setState(prevState => ({activeUserId: prevState.activeUserId + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeUserId} = this.state
    const currentDetails = reviewsList[activeUserId]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="container">
          <button
            className="button"
            type="button"
            data-testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-icon"
            />
          </button>
          {this.renderActiveReview(currentDetails)}
          <button
            className="button"
            type="button"
            data-testid="rightArrow"
            onClick={this.onClickRigthArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-icon"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
