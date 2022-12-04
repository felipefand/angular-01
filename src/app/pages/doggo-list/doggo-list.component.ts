import { Component } from '@angular/core';

import Doggo from 'src/app/models/Doggo';

@Component({
  selector: 'app-doggo-list',
  templateUrl: './doggo-list.component.html',
  styleUrls: ['./doggo-list.component.css']
})
export class DoggoListComponent {
  doggoList: Doggo[] = [
    {
      breed: "Bulldog",
      description: `
      According to Google Trends data, the Bulldog is the most popular dog breed in the world! \n This muscular, medium-sized dog has retained the crown it earned in our previous analysis. 
      The origins of the Bulldog are not pretty. Bred in England as a cross between the Pug and the Mastiff, its original use was for bull-baiting and blood sports. When bull-baiting was banned in the 1830s, the breed almost became extinct. Throughout the rest of the 1800s, breed enthusiasts worked to refine the characteristics of the breed, toning down its fierce aggression and turning it into something more akin to a companion dog. The Bulldog is synonymous with the British Prime Minister during World War II, Winston Churchill. Although many said that Churchill embodied the ‘bulldog spirit’ during the difficult stages of the war, it was suggested that there was more than a passing physical resemblance, too.
      Today, the Bulldog is used primarily as a family pet, although they can be trained as a protection dog. Whilst they can be difficult to train, they form strong bonds with their owners and are fiercely loyal to their family.
      `
    },
    {
      breed: "German Shepherd",
      description: `
      The German Shepherd’s popularity shows no sign of waning. They are the third-most registered breed in the United States, and feature in second place in this analysis – just as they did last time.
      A medium-to-large sized dog with distinctive pointed ears, the German Shepherd was developed to help with herding sheep and protecting flocks in Germany. These efforts took place in the second half of the nineteenth century. It was decided that the breed needed to be strong, smart, fast and agile to fulfill its role, and whilst early efforts to standardize the breed failed, a gentleman named Max von Stephanitz was instrumental in its eventual success. He had a clear idea of what a working dog should be, and was so taken with a dog he saw in a dog show in 1899 that he decided to purchase it on the spot. Von Stephanitz then formed the Society for German Shepherd Dogs, and within a matter of decades, the breed became one of the most popular – not just in Germany, but in other countries around the world.
      Today, the German Shepherd has multiple uses. Its trainability, temperament, drive and build make it well-suited for K9 work in police and military teams. Their strong sense of smell also enables them to succeed in detection disciplines and search and rescue.
      `
    },
    {
      breed: "Labrador Retriever",
      description: `
      For over thirty years, the Labrador Retriever has been the most popular dog in the United States based on AKC registrations. In 2022, the Labrador retains the bronze medal position in our analysis of popular dogs around the world.
      The breed dates back to the 1500s, where it was developed in Newfoundland, Canada. Small water dogs were bred with the larger Newfoundland breed to create a new breed called the St. John’s Water Dog or the Lesser Newfoundland. The St. John’s Water Dog was then brought to England in the 1830s, and weas bred with hunting dogs to create the modern-day Labrador Retriever. By the 1870s, the breed was popular across England. The breed was originally predominantly found with a black coat, but at the turn of the nineteenth century, the Yellow and Liver (now Chocolate) Labs also appeared.
      Labs are known to be even-tempered and a relatively healthy breed. They make great family pets, but have also been used for a number of functions. They are incredible swimmers, which means they can use their nose to locate injured or dead waterfowl. They can also be used as police or military K9s, or to perform service dog tasks. The versatility of the Labrador highlights why they are so popular around the world.
      `
    }
  ];
}
