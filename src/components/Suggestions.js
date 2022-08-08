import '../styles/suggestions.scss';
import Profile from './Profile';

function Suggestions() {
    return (
        <div className="suggestions">
            <div className="titleContainer">
                <div className="title">
                    Suggestions For You
                </div>
                <a href="/">See All</a>
            </div>

            <Profile 
                caption="Followed by mapvault + 3 more" 
                urlText="Follow" 
                iconSize="medium" 
                captionSize="small" 
                storyBorder={true}
            />
            <Profile 
                caption="Followed by Tom Cruise + 3 more" 
                urlText="Follow" 
                iconSize="medium" 
                captionSize="small" 
            />
            <Profile 
                caption="Followed by The Rock + 3 more" 
                urlText="Follow" 
                iconSize="medium" 
                captionSize="small" 
                storyBorder={true}
            />
            <Profile 
                caption="Followed by mapvault + 300 more" 
                urlText="Follow" 
                iconSize="medium" 
                captionSize="small" 
            />
            <Profile 
                caption="Follows you" 
                urlText="Follow" 
                iconSize="medium" 
                captionSize="small" 
                storyBorder={true}
            />
        </div>
    )
}

export default Suggestions;