import '../styles/cards.scss';
import Stories from './Stories';
import Card from "./Card";

function Cards() {
    const commentsOne = [
        {
          user: "raffagrassetti",
          text: "Woah dude, this is awesome! 🔥",
          id: 1,
        },
        {
          user: "therealadamsavage",
          text: "Like!",
          id: 2,
        },
        {
          user: "mapvault",
          text: "Niceeeee!",
          id: 3,
        },
      ];
    
      const commentsTwo = [
        {
          user: "mapvault",
          text: "Amazing content, keep it up!",
          id: 4,
        },
      ];
    
      const commentsThree = [
        {
          user: "dadatlacak",
          text: "Love this!",
          id: 5,
        },
      ];

    return(
        <div className="cards">
            <Stories />

            <Card 
                accountName="rafagrassetti" 
                storyBorder={true} 
                image="https://picsum.photos/800/900" 
                comments={commentsOne} 
                likedByText="dadatlacak" 
                likedByNumber={89} 
                hours={16}
            />
            <Card 
                accountName="The Rock" 
                storyBorder={true} 
                image="https://picsum.photos/800" 
                comments={commentsOne} 
                likedByText="Tom Cruise" 
                likedByNumber={1000} 
                hours={1}
            />
            <Card 
                accountName="Tom Cruise" 
                storyBorder={true} 
                image="https://picsum.photos/800/1000" 
                comments={commentsThree} 
                likedByText="The Rock" 
                likedByNumber={40} 
                hours={1}
            />

        </div>
    )
}

export default Cards;