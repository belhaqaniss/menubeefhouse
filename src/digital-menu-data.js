// Transcription du PDF « BEEF HOUSE - STOP TROTTOIR - A2 VERTICAL ».
// Chaque ligne : nom FR, nom EN, prix EUR, description FR, description EN.
export const categories = [
  { id:'froides', name:['Entrées froides & salades','Cold starters & salads'], short:['Entrées froides','Cold starters'], items:[
    ['Foie gras de canard','Duck foie gras',23,'Chutney de figues, pain brioché','Fig chutney, brioche bread'],
    ['Carpaccio de bœuf classique','Classic beef carpaccio',16,'Bœuf, parmesan, roquette, câpres. Supplément burrata +5 €','Beef, parmesan, rocket, capers. Burrata supplement +€5'],
    ['Salade César au poulet fermier','Caesar salad with free-range chicken',19,'Romaine, poulet fermier, anchois, parmesan, croûtons, œuf mollet','Romaine, free-range chicken, anchovies, parmesan, croutons, soft-boiled egg'],
    ['Salade Beef House','Beef House salad',22,'Bœuf grillé, comté, jeunes pousses, tomates cerises, pickles d’oignons rouges, croûtons','Grilled beef, comté, baby leaves, cherry tomatoes, pickled red onions, croutons'],
  ]},
  { id:'chaudes', name:['Entrées chaudes','Hot starters'], short:['Entrées chaudes','Hot starters'], items:[
    ['Os à moelle grillé','Grilled bone marrow',12,'Fleur de sel, persil, pain toasté','Fleur de sel, parsley, toasted bread'],
    ['Camembert rôti au four','Oven-roasted camembert',18,'Jeunes pousses, miel, thym, pain grillé à l’ail des ours','Baby leaves, honey, thyme, toast with wild garlic'],
    ['Wagyu & Sushi Rice','Wagyu & Sushi Rice',18,'Riz à sushi délicat, confit d’oignons fondant et émincé de Wagyu juste saisi','Delicate sushi rice, sweet onion confit and lightly seared Wagyu'],
    ['Croc Cecina','Truffle Cecina Croc',19,'Truffe, cecina, comté','Truffle, cecina, comté'],
    ['Tacos du Beef House','Beef House Tacos',18,'Bœuf savoureux, avocat fondant, sauce dynamite','Savoury beef, creamy avocado, dynamite sauce'],
    ['Cassolette de bœuf','Beef cassolette',16,'Sauce au bœuf fumé, émincé de bœuf saisi, cheddar fondant, oignons frits','Smoked beef sauce, seared beef strips, melted cheddar, fried onions'],
    ['Panier de frites truffées','Truffled fries basket',16,'Frites dorées, parmesan, touche de truffe, filet de jus de bœuf','Golden fries, parmesan, a touch of truffle, drizzle of beef jus'],
  ]},
  { id:'boucher', name:['Pièces du boucher','Butcher’s cuts'], short:['Le boucher','Butcher’s cuts'], items:[
    ['Entrecôte','Ribeye steak',32,'Env. 300 g · Juteuse et persillée','Approx. 300 g · Juicy and marbled'],
    ['Faux-filet','Sirloin steak',30,'Env. 300 g · Goût franc, texture ferme','Approx. 300 g · Bold flavour, firm texture'],
    ['Pièce du boucher','Butcher’s cut',28,'Env. 300 g · Tendre et savoureuse','Approx. 300 g · Tender and flavoursome'],
    ['Onglet de bœuf','Hanger steak',29,'Env. 300 g · Saveur intense, texture fondante','Approx. 300 g · Intense flavour, melting texture'],
    ['Filet de bœuf','Beef fillet',35,'Env. 220 g · D’une extrême tendreté','Approx. 220 g · Extremely tender'],
    ['Tartare de bœuf','Beef tartare',25,'Env. 200 g · Découpé au couteau. Supplément cuisson +3 €','Approx. 200 g · Hand-cut. Cooking supplement +€3'],
    ['Magret de canard grillé','Grilled duck breast',32,'Rosé à cœur, jus réduit, miel et éclats de pistache','Pink at heart, reduced jus, honey and pistachio shards'],
    ['Côtelettes d’agneau grillées','Grilled lamb cutlets',32,'Env. 300 g · Savoureuses et juteuses','Approx. 300 g · Flavourful and juicy'],
    ['Côte de bœuf','Rib of beef',49,'Env. 500 g · Généreuse et persillée','Approx. 500 g · Generous and marbled'],
  ]},
  { id:'plateaux', name:['Pièces & plateaux','Cuts & sharing platters'], short:['À partager','To share'], items:[
    ['Châteaubriand','Châteaubriand',199,'Env. 1 kg · 4 accompagnements et 4 sauces au choix','Approx. 1 kg · 4 sides and 4 sauces of your choice'],
    ['Faux-filet','Sirloin steak',179,'Env. 1 kg · 4 accompagnements et 4 sauces au choix','Approx. 1 kg · 4 sides and 4 sauces of your choice'],
    ['Travers de bœuf fumés','Smoked beef short ribs',120,'Env. 1,5 kg · 4 accompagnements et 4 sauces au choix','Approx. 1.5 kg · 4 sides and 4 sauces of your choice'],
    ['Tomahawk steak (Aberdeen Angus)','Tomahawk steak (Aberdeen Angus)',110,'Env. 1 kg · 3 accompagnements et 3 sauces au choix','Approx. 1 kg · 3 sides and 3 sauces of your choice'],
    ['Parillada 2 personnes','Parillada for 2',69,'Faux-filet, magret, côtelettes d’agneau · 3 sauces et 3 accompagnements','Sirloin, duck breast, lamb cutlets · 3 sauces and 3 sides'],
    ['Parillada 3 personnes','Parillada for 3',99,'Faux-filet, magret, côtelettes d’agneau, poulet · 4 sauces et 4 accompagnements','Sirloin, duck breast, lamb cutlets, chicken · 4 sauces and 4 sides'],
    ['Parillada 4 personnes','Parillada for 4',139,'Faux-filet, magret, côtelettes d’agneau, poulet, onglet de bœuf · 5 sauces et 5 accompagnements','Sirloin, duck breast, lamb cutlets, chicken, hanger steak · 5 sauces and 5 sides'],
    ['Parillada 5 personnes','Parillada for 5',169,'Faux-filet, magret, côtelettes d’agneau, filet de bœuf, poulet · 6 sauces et 6 accompagnements','Sirloin, duck breast, lamb cutlets, beef fillet, chicken · 6 sauces and 6 sides'],
  ]},
  { id:'signature', name:['Plats signature','Signature dishes'], short:['Signatures','Signatures'], items:[
    ['Saucisses de veau à l’italienne','Italian-style veal sausages',25,'Env. 200 g · Moelleuses à cœur, dorées à la braise','Approx. 200 g · Meltingly soft, golden over the embers'],
    ['Travers de bœuf fumés','Smoked beef short ribs',34,'Env. 300 g · Cuisson lente et saveurs fumées','Approx. 300 g · Slow-cooked with smoky flavours'],
    ['Souris d’agneau confite','Slow-cooked lamb shank',39,'1 pièce · Fondante, jus réduit','1 piece · Meltingly tender, reduced jus'],
    ['Côte de veau façon Milanaise','Veal cutlet Milanese',39,'Côte de veau panée, dorée et croustillante, tendre à cœur','Breaded veal cutlet, golden and crisp, tender at heart'],
    ['Cordon bleu maison','Homemade cordon bleu',25,'Croustillant et fondant','Crisp and meltingly tender'],
    ['Tournedos Rossini','Tournedos Rossini',54,'Env. 220 g · Filet de bœuf et foie gras','Approx. 220 g · Beef fillet and foie gras'],
    ['1/4 de poulet fermier grillé','1/4 grilled free-range chicken',18,'Mariné aux herbes, sauce moutarde','Herb-marinated, mustard sauce'],
  ]},
  { id:'wagyu', name:['Wagyu','Wagyu'], short:['Wagyu','Wagyu'], items:[
    ['Carpaccio de wagyu','Wagyu carpaccio',26,'Finement tranché, servi frais pour la finesse de sa marbrure','Finely sliced and served fresh, so you can enjoy the fineness of its marbling'],
    ['Wagyu & Sushi Rice','Wagyu & Sushi Rice',18,'Riz à sushi délicat, confit d’oignons fondant et émincé de Wagyu juste saisi','Delicate sushi rice, sweet onion confit and lightly seared Wagyu'],
    ['Tacos wagyu','Wagyu tacos',28,'Émincé de wagyu, avocat fondant, sauce dynamite','Wagyu strips, creamy avocado, dynamite sauce'],
    ['Faux-filet de wagyu 250 g','Wagyu sirloin steak 250 g',65,'Fine marbrure, saisi à la braise','Fine marbling, seared over the embers'],
    ['Entrecôte de wagyu 250 g','Wagyu ribeye steak 250 g',72,'Marbrure généreuse, cœur rosé','Generous marbling, pink centre'],
  ]},
  { id:'desserts', name:['Desserts','Desserts'], short:['Desserts','Desserts'], items:[
    ['Gâteau tout choco','All-chocolate cake',9,'Gâteau au chocolat, crème vanille, glace vanille','Chocolate cake, vanilla cream, vanilla ice cream'],
    ['Crème brûlée','Crème brûlée',9,'Crème brûlée, crème vanille, fruits rouges','Crème brûlée, vanilla cream, red berries'],
    ['Profiteroles','Profiteroles',12,'Choux garnis de glace vanille, chocolat croquant, généreusement nappés de chocolat chaud','Choux buns filled with vanilla ice cream, crunchy chocolate, generously topped with hot chocolate'],
    ['Tarte au citron meringuée','Lemon meringue tart',10,'Crème citron acidulée, pâte sablée','Tangy lemon cream, shortcrust pastry'],
    ['Trompe-l’œil','Trompe-l’œil',12,'',''],
    ['Citron givré','Frozen lemon',10,'',''],
    ['Tarte tatin','Tarte tatin',11,'Servie tiède avec sa boule de glace et son caramel beurre salé, éclats de noisettes','Served warm with a scoop of ice cream, salted butter caramel and hazelnut shards'],
    ['Mousse au chocolat maison','Homemade chocolate mousse',9,'Mousse au chocolat intense, légère et onctueuse, éclats de chocolat croquant','Intense chocolate mousse, light and silky, crunchy chocolate shards'],
  ]},
];
export const extras = [
  {name:['Accompagnements','Sides'], price:5, items:[
    ['Frites maison','Homemade fries'],['Épinards à la crème','Creamed spinach'],['Purée truffée (+5 €)','Truffle mashed potatoes (+€5)'],['Légumes','Grilled vegetables'],['Purée de pommes de terre','Mashed potatoes'],['Tomates provençales','Provençal tomatoes'],['Gratin dauphinois','Potato gratin'],['Salade de jeunes pousses','Baby leaf salad'],['Riz','Rice'],
  ]},
  {name:['Sauces maison','Homemade sauces'], price:3, items:[
    ['Poivre','Pepper'],['Jus corsé','Rich meat jus'],['Tartare','Tartare'],['Crème de fromage','Cheese cream'],['Chipotle fumée','Smoked chipotle'],['Forestière','Mushroom'],['Roquefort','Roquefort'],['Sauce à la truffe (+4 €)','Truffle sauce (+€4)'],['Jalapeño citron','Lemon jalapeño'],
  ]},
];
