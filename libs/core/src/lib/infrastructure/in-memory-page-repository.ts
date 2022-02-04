import { Page, IPage } from '../domain/page';
import { IPageRepository } from '../domain/page-repository-interface';

const IN_MEMORY_DATA = [
  {
    title: 'Sustainable literally kinfolk gentrify mustache deep v.',
    photo: 'https://via.placeholder.com/250',
    description:
      'Crucifix celiac venmo banjo selfies master. Poutine small batch banh mi hoodie try-hard. Hoodie park kogi cleanse yolo celiac hashtag hella. Offal xoxo plaid try-hard church-key migas.',
    shortDescription: 'Crucifix celiac venmo banjo selfies master.',
  },
  {
    title: 'Master 8-bit pug austin xoxo kombucha chillwave bitters banjo.',
    photo: 'https://via.placeholder.com/250',
    description:
      'Viral post-ironic art party. Bitters pug offal brunch. Meh vhs pork belly food truck diy taxidermy. Vhs carry viral butcher microdosing chia semiotics pop-up. Letterpress kale chips typewriter fashion axe vhs fixie.',
    shortDescription: 'Viral post-ironic art party. Bitters pug offal brunch.',
  },
  {
    title: 'Banh mi hashtag trust fund synth pbr&b occupy kombucha meh.',
    photo: 'https://via.placeholder.com/250',
    description:
      "Mumblecore forage xoxo street jean shorts pitchfork chambray. Xoxo portland single-origin coffee salvia freegan sriracha. Selfies church-key occupy pabst plaid cred. Pitchfork neutra slow-carb pour-over. Locavore beard you probably haven't heard of them occupy.",
    shortDescription: 'Mumblecore forage xoxo street jean shorts pitchfork chambray.',
  },
  {
    title: 'Narwhal listicle blog flannel.',
    photo: 'https://via.placeholder.com/250',
    description: 'Tumblr offal art party umami. Cliche gentrify sartorial street sriracha. Humblebrag franzen dreamcatcher brunch meh pug.',
    shortDescription: 'Tumblr offal art party umami. Cliche gentrify sartorial street sriracha.',
  },
  {
    title: "You probably haven't heard of them gentrify drinking microdosing meditation intelligentsia knausgaard.",
    photo: 'https://via.placeholder.com/250',
    description:
      'Trust fund umami truffaut ramps. Portland photo booth health church-key waistcoat pbr&b lumbersexual polaroid. Austin sriracha fingerstache single-origin coffee bitters mustache next level.',
    shortDescription: 'Trust fund umami truffaut ramps.',
  },
  {
    title: 'Helvetica etsy church-key photo booth.',
    photo: 'https://via.placeholder.com/250',
    description: "Godard carry freegan disrupt. Xoxo distillery tilde polaroid 90's. Iphone crucifix schlitz retro banh mi.",
    shortDescription: 'Godard carry freegan disrupt. Xoxo distillery tilde polaroid 90s.',
  },
  {
    title: 'Raw denim meditation 8-bit quinoa.',
    photo: 'https://via.placeholder.com/250',
    description: 'Schlitz taxidermy cliche locavore everyday disrupt pug. Portland pour-over shabby chic messenger bag. Meh pabst aesthetic tousled drinking synth tilde.',
    shortDescription: 'Schlitz taxidermy cliche locavore everyday disrupt pug.',
  },
  {
    title: 'Vhs food truck next level semiotics cred before they sold out meh sustainable letterpress.',
    photo: 'https://via.placeholder.com/250',
    description:
      'Hashtag twee heirloom pour-over vegan cold-pressed. Synth bushwick thundercats pitchfork cleanse migas craft beer cronut. Bitters cred wayfarers park. Crucifix godard diy stumptown banh mi meh shabby chic. Cred whatever flannel raw denim mixtape.',
    shortDescription: 'Hashtag twee heirloom pour-over vegan cold-pressed.',
  },
  {
    title: 'Cred asymmetrical seitan tacos ramps before they sold out.',
    photo: 'https://via.placeholder.com/250',
    description:
      'Leggings phlogiston echo bushwick. Vice kinfolk offal pabst loko ramps gentrify. Literally irony kinfolk cliche roof cleanse. Seitan lo-fi hella hammock vegan helvetica readymade slow-carb. Cardigan street typewriter disrupt.',
    shortDescription: 'Leggings phlogiston echo bushwick. Vice kinfolk offal pabst loko ramps gentrify.',
  },
  {
    title: "Paleo hashtag drinking you probably haven't heard of them 8-bit wayfarers.",
    photo: 'https://via.placeholder.com/250',
    description: 'Offal single-origin coffee muggle magic. Roof synth listicle. Kitsch tote bag cliche. Crucifix literally loko chambray diy cardigan pork belly.',
    shortDescription: 'Offal single-origin coffee muggle magic. Roof synth listicle.',
  },
  {
    title: 'Deep v fanny pack carry ramps mustache viral chambray five dollar toast mumblecore.',
    photo: 'https://via.placeholder.com/250',
    description: 'Migas thundercats post-ironic kogi mustache. Banh mi synth cleanse celiac photo booth plaid mlkshk readymade. Typewriter fashion axe phlogiston diy.',
    shortDescription: 'Migas thundercats post-ironic kogi mustache.',
  },
  {
    title: 'Mumblecore schlitz art party direct trade sustainable gastropub actually.',
    photo: 'https://via.placeholder.com/250',
    description:
      "Lumbersexual small batch tote bag slow-carb hoodie kinfolk green juice sustainable. Aesthetic kogi brunch squid umami twee. Loko 90's post-ironic. Slow-carb irony microdosing you probably haven't heard of them. Seitan sartorial offal yr skateboard pour-over meditation blue bottle.",
    shortDescription: 'Lumbersexual small batch tote bag slow-carb hoodie kinfolk green juice sustainable.',
  },
  {
    title: 'Scenester street diy kogi pbr&b chartreuse humblebrag.',
    photo: 'https://via.placeholder.com/250',
    description: 'Beard bespoke semiotics. Vinegar raw denim organic occupy stumptown sriracha ethical. Pour-over try-hard yuccie. Salvia trust fund vinegar fanny pack messenger bag cornhole tilde.',
    shortDescription: 'Beard bespoke semiotics. Vinegar raw denim organic occupy stumptown sriracha ethical.',
  },
  {
    title: 'Yr celiac farm-to-table 3 wolf moon.',
    photo: 'https://via.placeholder.com/250',
    description: 'Seitan butcher shoreditch. Austin locavore swag. Flannel sriracha church-key fanny pack pour-over. Vinegar chillwave put a bird on it migas pbr&b bespoke.',
    shortDescription: 'Seitan butcher shoreditch. Austin locavore swag.',
  },
  {
    title: 'Listicle keytar mlkshk jean shorts intelligentsia lomo echo.',
    photo: 'https://via.placeholder.com/250',
    description: "Banjo diy bushwick chillwave meh readymade crucifix mixtape. 90's deep v ramps. Pbr&b gastropub umami whatever offal.",
    shortDescription: 'Banjo diy bushwick chillwave meh readymade crucifix mixtape.',
  },
  {
    title: 'Letterpress next level swag portland taxidermy.',
    photo: 'https://via.placeholder.com/250',
    description:
      'Kitsch drinking lo-fi truffaut. Tattooed street forage +1 messenger bag humblebrag swag drinking. Listicle seitan synth cardigan brooklyn bespoke irony williamsburg. Raw denim tacos stumptown 3 wolf moon.',
    shortDescription: 'Kitsch drinking lo-fi truffaut. Tattooed street forage +1 messenger bag humblebrag swag drinking.',
  },
  {
    title: 'Put a bird on it neutra migas fashion axe offal.',
    photo: 'https://via.placeholder.com/250',
    description: "Ennui direct trade freegan vinegar asymmetrical 90's 3 wolf moon kogi. Cold-pressed flannel tattooed kogi. Cardigan authentic pickled.",
    shortDescription: 'Ennui direct trade freegan vinegar asymmetrical 90s 3 wolf moon kogi.',
  },
  {
    title: 'Aesthetic green juice keffiyeh photo booth yr godard.',
    photo: 'https://via.placeholder.com/250',
    description:
      'Flannel wes anderson blog bushwick cliche intelligentsia sustainable put a bird on it. Disrupt bicycle rights heirloom mixtape sustainable dreamcatcher gluten-free small batch. Kinfolk 8-bit mustache biodiesel scenester seitan selfies. Normcore meh street leggings wes anderson. Tofu phlogiston skateboard freegan normcore tacos.',
    shortDescription: 'Flannel wes anderson blog bushwick cliche intelligentsia sustainable put a bird on it.',
  },
  {
    title: 'Bicycle rights vhs wes anderson master normcore cronut cold-pressed.',
    photo: 'https://via.placeholder.com/250',
    description:
      'Mixtape echo banh mi. Flexitarian messenger bag street. Listicle helvetica plaid meditation. Lo-fi post-ironic five dollar toast disrupt readymade. Kinfolk pug authentic yr sartorial green juice.',
    shortDescription: 'Mixtape echo banh mi. Flexitarian messenger bag street.',
  },
  {
    title: 'Chicharrones single-origin coffee actually occupy skateboard locavore jean shorts salvia portland.',
    photo: 'https://via.placeholder.com/250',
    description:
      'Dreamcatcher echo hashtag vegan typewriter. Photo booth yr post-ironic health helvetica seitan beard listicle. Bespoke 3 wolf moon fanny pack listicle yolo. Portland kickstarter offal kinfolk chambray.',
    shortDescription: 'Dreamcatcher echo hashtag vegan typewriter.',
  },
];

export class InMemoryPageRepository implements IPageRepository {
  findByTitle(title: string) {
    const titleRegex = new RegExp(`.*${title.toLowerCase()}.*`);
    const result = IN_MEMORY_DATA.filter((item) => item.title.toLowerCase().match(titleRegex)).map((item) => new Page(item));
    return Promise.resolve(result);
  }
}

export const inMemoryPageRepository = new InMemoryPageRepository();
