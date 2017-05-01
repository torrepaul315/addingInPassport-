
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
//  i think the next line is correct?
  return knex('blogpost').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogpost').insert([
        {title: 'airplanes', body:'Scenester cold-pressed VHS tofu keffiyeh kinfolk. Blue bottle sustainable meh whatever truffaut, authentic copper mug flannel keffiyeh hell of. Fam sustainable glossier, DIY fashion axe kickstarter iceland tofu. Mlkshk direct trade occupy, flexitarian prism 8-bit iPhone lumbersexual taxidermy health goth narwhal asymmetrical DIY. Stumptown lomo blog tilde kogi, next level green juice flannel selfies. YOLO stumptown master cleanse ramps, echo park truffaut hella XOXO. La croix hashtag irony, lumbersexual PBR&B try-hard fam YOLO copper mug normcore man bun tattooed pork belly seitan kickstarter.', user_email:'moe@gmail.com'},
        {title: 'cars', body:"Salvia fashion axe mustache wolf, poke vexillologist lumbersexual chicharrones irony occupy YOLO. Sartorial kogi cardigan beard, waistcoat poke tacos. Williamsburg vaporware butcher shoreditch. Man bun hot chicken vexillologist, jianbing air plant cold-pressed +1 pabst umami brooklyn. Ennui air plant you probably haven't heard of them, chillwave fixie beard pinterest farm-to-table tousled williamsburg edison bulb. Tofu taxidermy bespoke, distillery lo-fi unicorn truffaut poke health goth scenester keffiyeh pinterest hot chicken polaroid. Vape shoreditch 3 wolf moon, chicharrones subway tile retro tilde poke marfa.", user_email:'joe@gmail.com'},
        {title: 'trains', body:"Wayfarers messenger bag 3 wolf moon, chartreuse skateboard kickstarter tilde butcher single-origin coffee beard pork belly farm-to-table. 3 wolf moon biodiesel blog vice, meggings unicorn food truck wayfarers trust fund leggings. Direct trade meh typewriter fam. Hoodie umami poutine blue bottle, vaporware swag echo park crucifix mixtape plaid. Cliche kickstarter raclette, lyft vice irony locavore beard chartreuse small batch readymade. Salvia shoreditch vinyl hot chicken chartreuse farm-to-table franzen sriracha photo booth. Stumptown readymade hexagon crucifix.", user_email:'curly@gmail.com'},
      ]);
    });
};






// {id: 1, name: 'juan'},
// {id: 2, name: 'alfred'},
// {id: 3, name: 'geo'}
