import "dotenv/config.js"
import "../../config/database.js"
import Category from "../Category.js"

const categories = [
    {
        name: "Shonen",
        color: "#F9A8D4",
        hover: "#F472B6",
        description: "Shonen is a manga genre primarily targeted at a young male audience, typically aged between 12 and 18 years old. These stories often revolve around themes of action, adventure, and personal growth. They feature energetic protagonists who embark on epic journeys, face powerful adversaries, and overcome incredible odds. Shonen manga emphasizes themes such as friendship, perseverance, self-discovery, and achieving one’s dreams, which resonate with readers across the globe. The genre often includes a blend of intense battles, humor, emotional depth, and moments of triumph that inspire and entertain. Iconic series like 'Naruto,' 'Dragon Ball,' and 'One Piece' have shaped the shonen world, captivating fans with their unforgettable characters, thrilling plotlines, and universal messages of hope and courage.",
        coverPhoto: "https://example.com/shonen.jpg",
        characterPhoto: "https://example.com/naruto.jpg",
        adminId: null
    },
    {
        name: "Seinen",
        color: "#F97316",
        hover: "#ff8a38",
        description: "Seinen manga is designed for adult male readers and delves into deeper, more complex themes that often explore the intricacies of human nature and society. The genre frequently features sophisticated storytelling, detailed art styles, and plots that tackle psychological, philosophical, or existential questions. Seinen manga often incorporates mature content, including violence, political intrigue, and nuanced character studies, which appeal to a more seasoned audience. Works like 'Berserk,' 'Monster,' and 'Vagabond' have set the benchmark for the genre, offering a blend of gripping narratives, artistic excellence, and thought-provoking content. Whether it's exploring the darkness of the human psyche or presenting epic tales of redemption and revenge, Seinen manga provides a platform for storytelling that pushes the boundaries of creativity and realism.",
        coverPhoto: "https://example.com/seinen.jpg",
        characterPhoto: "https://example.com/guts.jpg",
        adminId: null
    },
    {
        name: "Shojo",
        color: "#00BA88",
        hover: "#06c995",
        description: "Shojo manga is a genre aimed at young female readers and focuses on stories of romance, emotional growth, and interpersonal relationships. Shojo often features beautifully illustrated art with delicate lines and expressive characters, emphasizing the emotional nuances of the story. The genre celebrates themes like love, friendship, self-discovery, and overcoming personal challenges. Shojo manga often portrays dynamic heroines and heartwarming journeys, with narratives that encourage readers to dream and embrace their emotions. Popular titles like 'Sailor Moon,' 'Fruits Basket,' and 'Ouran High School Host Club' have transcended cultural barriers, becoming timeless classics. The genre’s appeal lies in its ability to create relatable and inspiring stories that touch the heart, making it a beloved choice for readers worldwide.",
        coverPhoto: "https://example.com/shojo.jpg",
        characterPhoto: "https://example.com/usagi.jpg",
        adminId: null
    },
    {
        name: "Kodomo",
        color: "#8883F0",
        hover: "#6962f0",
        description: "Kodomo manga is tailored for children and offers entertaining, educational, and easy-to-understand stories. This genre is characterized by simple narratives, charming characters, and positive moral lessons designed to captivate young minds. Kodomo manga often teaches valuable life lessons through fun adventures, encouraging curiosity, kindness, and creativity. Popular series like 'Doraemon,' 'Pokemon,' and 'Hamtaro' exemplify this genre, combining delightful characters with stories that entertain while imparting wisdom. The bright, colorful art style and engaging scenarios make Kodomo manga accessible and enjoyable for young readers, creating a perfect introduction to the world of manga. Whether it’s about friendship, teamwork, or the importance of imagination, Kodomo manga nurtures children’s love for stories while inspiring them to explore the world around them.",
        coverPhoto: "https://example.com/kodomo.jpg",
        characterPhoto: "https://example.com/doraemon.jpg",
        adminId: null
    }
];

    
Category.insertMany(categories)