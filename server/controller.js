require('dotenv').config()

const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.CONNECTION_STRING)

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
            DROP TABLE if exists books;
            DROP TABLE if exists categories;

            CREATE TABLE categories (
                id SERIAL PRIMARY KEY,
                name VARCHAR NOT NULL
            );
            
            CREATE TABLE books (
                id SERIAL PRIMARY KEY,
                category_id integer NOT NULL REFERENCES categories(id),
                title VARCHAR NOT NULL,
                author VARCHAR NOT NULL,
                cover_image VARCHAR NOT NULL,
                abstract VARCHAR NOT NULL,
                added_date timestamp NOT NULL
            );

            INSERT INTO categories (name) VALUES
            ('Fiction'),
            ('Historical Fiction'),
            ('Science fiction'),
            ('Memoir'),
            ('Literary fiction'),
            ('Adventure fiction'),
            ('Paranormal romance'),
            ('Novel'),
            ('Non-fiction'),
            ('Horror'),
            ('Young adult fiction'),
            ('Mystery'),
            ('Graphic Novel'),
            ('Short stories'),
            ('Dystopia'),
            ('Coming-of-age story'),
            ('Romance novel'),
            ('Biography'),
            ('Paperback'),
            ('Thriller'),
            ('Spirituality'),
            ('Hardcover'),
            ('Picture book'),
            ('Science'),
            ('Education'),
            ('Fantasy');

            INSERT INTO books (category_id, title, author, cover_image, abstract, added_date)
            VALUES
            (8, 'The Hunger Games', 'Suzanne Collins', 'https://images-na.ssl-images-amazon.com/images/P/0439023483.01._SX540_SCLZZZZZZZ_.jpg', 'In a future North America, where the rulers of Panem maintain control through an annual televised survival competition pitting young people from each of the twelve districts against one another, sixteen-year-old Katniss is skills are put to the test when she voluntarily takes her younger sister.', '2017-03-14T23:12:33.090Z'),
            (20, 'Mockingjay', 'Suzanne Collins', 'https://images-na.ssl-images-amazon.com/images/P/0545663261.01._SX360_SCLZZZZZZZ_.jpg', 'Katniss Everdeen is having survived the Hunger games twice makes her a target of the Capitol and President Snow, as well as a hero to the rebels who will succeed only if Katniss is willing to put aside her personal feelings and serve as their pawn.', '2017-01-14T23:12:33.090Z'),
            (3, 'A Game of Thrones', 'George R. R. Martin', '', 'Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King�??s Landing. There Eddard Stark of Winterfell rules in Robert�??s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse�??unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season.', '2013-09-21T23:12:33.090Z'),
            (15, 'A Clash of Kings', 'George R. R. Martin', 'https://images-na.ssl-images-amazon.com/images/P/0141439475.01._SX540_SCLZZZZZZZ_.jpg', 'Gertrude Stein and Alice B. Toklas, Abraham Stoker, Lewis Carroll, Herman Melville, JeffBuckley, C. S. Lewis, Charles Lamb, Carl Sandburg, Karen Blixen, Sir Walter Scott', '2012-03-14T23:12:33.090Z'),
            (8, 'Dracula', 'Bram Stoker', '	https://images-na.ssl-images-amazon.com/images/P/014143984X.01._SX360_SCLZZZZZZZ_.jpg', 'Having deduced the double identity of Count Dracula, a wealthy Transylvanian nobleman, a small group of people vow to rid the world of the evil vampire.', '2017-09-11T23:12:33.090Z'),
            (10, 'The War of the Worlds', 'H. G. Wells', '	https://images-na.ssl-images-amazon.com/images/P/0375759239.01._SX360_SCLZZZZZZZ_.jpg', 'As life on Mars becomes impossible, Martians and their terrifying machines invade the earth.', '2020-07-24T23:12:33.090Z'),
            (16, 'The Martian Chronicles', 'Ray Bradbury', 'https://images-na.ssl-images-amazon.com/images/P/0553278223.01._SX360_SCLZZZZZZZ_.jpg', 'Ray Bradbury is a storyteller without peer, a poet of the possible, and, indisputably, one of America is most beloved authors. In a much celebrated literary career that has spanned six decades, he has produced an astonishing body of work: unforgettable novels, including Fahrenheit 451 and Something Wicked This Way Comes; essays, theatrical works, screenplays and teleplays; The Illustrated Mein, Dandelion Wine, The October Country, and numerous other superb short story collections. But of all the dazzling stars in the vast Bradbury universe, none shines more luminous than these masterful chronicles of Earth is settlement of the fourth world from the sun.', '2011-05-24T23:12:33.090Z'),
            (8, 'Dandelion Wine', 'Ray Bradbury', '	https://images-na.ssl-images-amazon.com/images/P/0553277537.01._SX360_SCLZZZZZZZ_.jpg', 'Ray Bradbury is moving recollection of a vanished golden era remains one of his most enchanting novels. Dandelion Wine stands out in the Bradbury literary canon as the author is most deeply personal work, a semiautobiographical recollection of a magical small-town summer in 1928.', '2017-03-14T23:12:33.090Z'),
            (20, 'Deathbird Stories', 'Harlan Ellison', 'https://pics.cdn.librarything.com/picsizes/e8/58/e8583c444b11adc597838344167426f41514141_v5.jpg', 'Masterpieces of myth and terror about modern gods from technology to drugs to materialism--"fantasy at its most bizarre and unsettling" (The New York Times). As Earth approaches Armageddon, a man embarks on a quest to confront God in the Hugo Award-winning novelette, "The Deathbird."   In New York City, a brutal act of violence summons a malevolent spirit and a growing congregation of desensitized worshippers in "The Whimper of Whipped Dogs," an Edgar Award winner influenced by the real-life murder of Queens resident Kitty Genovese in 1964.   In "Paingod," the deity tasked with inflicting pain and suffering on every living being in the universe questions the purpose of its cruel existence.', '2013-10-30T23:12:33.090Z'),
            (21, 'The Doors of His Face, the Lamps of His Mouth and Other Stories', 'Roger Zelazny', 'https://images-na.ssl-images-amazon.com/images/P/1596871423.01._SX360_SCLZZZZZZZ_.jpg', 'Here are strange, beautiful stories covering the full spectrum of the late Roger Zelazny is remarkable talents. He had a rare ability to mix the dream-like, disturbing imagery of fantasy with the real-life hardware of science fiction. His vivid imagination and fine prose made him one of the most highly acclaimed writers in his field. Three times he won the Nebula Award, and six times the Hugo Award, for excellence in novels and short fiction. Roger Zelazny possessed a unique, dazzling talent; his visions of the future, of other worlds and of other realities are, by turns, enchanting and disturbing, and always memorable.', '2009-01-10T23:12:33.090Z'),
            (25, 'Science', 'John Farndon', 'https://images-na.ssl-images-amazon.com/images/P/0752592998.01._SX540_SCLZZZZZZZ_.jpg', 'How do things dissolve? What is a silicone chip? You will find answers to questions like these and many more in this very informative book.', '2007-03-23T23:12:33.090Z'),
            (14, 'Persuasion', 'Jane Austen', 'https://images-na.ssl-images-amazon.com/images/P/0141439688.01._SX360_SCLZZZZZZZ_.jpg
            ', 'When she was young and beautiful Anne Elliot fell in love with a dashing, but poor naval officer. Her family considered him beneath her and persuaded her to break off the match. Eight years later, when the novel begins, Anne is well past the bloom of her youth. Until Wentworth, now a celebrated captain, returns to the area to court her young neighour. Anne begins to slowly bloom a second time, though she hardly dares hope that he will return to her. The last of Austen is novels, Persuasion is also considered her most thoughtful, philosophical work.', '2015-05-08T23:12:33.090Z'),
            (11, 'Jane Austen: A Life', 'Claire Tomalin', 'https://images-na.ssl-images-amazon.com/images/P/0679766766.01._SX360_SCLZZZZZZZ_.jpg', 'The novels of Jane Austen depict a world of civility, reassuring stability and continuity, which generations of readers have supposed was the world she herself inhabited. Claire Tomalin is biography paints a surprisingly different picture of the Austen family and their Hampshire neighbours, and of Jane is progress through a difficult childhood, an unhappy love affair, her experiences as a poor relation and her decision to reject a marriage that would solve all her problems - except that of continuing as a writer. Both the woman and the novels are radically reassessed in this biography.', '2017-11-01T23:12:33.090Z'),
            (10, 'Thomas Hardy', 'Claire Tomalin', '	https://images-na.ssl-images-amazon.com/images/P/1594201188.01._SX360_SCLZZZZZZZ_.jpg', 'Whitbread Award winner Claire Tomalin is seminal biography of the enigmatic novelist and poet Thomas Hardy. Today Thomas Hardy is best known for creating the great Wessex landscape as the backdrop to his rural stories, starting with Far from the Madding Crowd, and making them classics. But his true legacy is that of a progressive thinker. When he published Tess of the d Urbervilles and Jude the Obscure late in his career, Hardy explored a very different world than that of his rural tales, one in which the plight of lower classes and women take center stage while the higher classes are damned. Ironically, though, Hardy remained cloaked in the arms of this very upper class during the publication of these books, acting at all times in complete convention with the rules of society.', '2018-12-09T23:12:33.090Z'),
            (5, 'Charles Dickens: A Life', 'Claire Tomalin', '	https://images-na.ssl-images-amazon.com/images/P/1594203091.01._SX360_SCLZZZZZZZ_.jpg', 'When Charles Dickens died in 1870, The Times of London successfully campaigned for his burial in Westminster Abbey, the final resting place of England is kings and heroes. Thousands flocked to mourn the best recognized and loved man of nineteenth-century England. His books had made them laugh, shown them the squalor and greed of English life, and also the power of personal virtue and the strength of ordinary people. In his last years Dickens drew adoring crowds, had met presidents and princes, and had amassed a fortune. Yet like his heroes, Dickens trod a hard path to greatness. His young life was overturned when his profligate father was sent to debtors  prison and Dickens was forced into harsh factory work--but this led to his remarkable eye for all that was absurd, tragic, and redemptive in London life. This biography gives full measure to Dickens is stature--his virtues both as a writer and as a human being--while observing his failings in both respects with an unblinking eye.--From publisher description.', '2023-06-20T23:12:33.090Z'),
            (8, 'Dickens', 'Peter Ackroyd', '	https://pics.cdn.librarything.com/picsizes/06/89/0689123de90424c593364695067426f41514141_v5.jpg', 'A biography of the life and work of the celebrated English novelist.', '2021-03-04T23:12:33.090Z'),
            (10, 'A Biography', 'Fred Kaplan', '	https://pics.cdn.librarything.com/picsizes/c9/59/c9593d362a27a9a593879665641426f41514141_v5.jpg', 'The engaging biography of one of the most celebrated and enduring authors of Western literature Charles Dickens grew up in harsh poverty and became one of the world is most beloved authors. Biographer Fred Kaplan takes a brilliant, multifaceted approach in his examination of Dickens is life: his fraught marriage and relationships; the ever-present effects of his humble beginnings; his extensive, but carefully managed, public life; and his friendships with famous writers. Dickens unearths the complex passions that drove both the man and his work, illuminating why the legendary author--just like the characters in his fiction--has remained a mammoth figure in Western literature.', '2022-04-07T23:12:33.090Z'),
            (20, 'The Story of Nelly Ternan and Charles Dickens', 'Claire Tomalin', 'https://images-na.ssl-images-amazon.com/images/P/0140121366.01._SX360_SCLZZZZZZZ_.jpg', 'Biography & Autobiography. Nonfiction. Charles Dickens and Nelly Ternan met in 1857; she was 18, a hard-working actress performing in his production of The Frozen Deep, and he was 45, the most lionized writer in England. Out of their meeting came a love affair that lasted thirteen years and destroyed Dickens is marriage while effacing Nelly Ternan from the public record. In this remarkable work of biography and scholarly reconstruction, the acclaimed biographer of Mary Wollstonecraft, Thomas Hardy, Samuel Pepys and Jane Austen rescues Nelly from the shadows of history, not only returning the neglected actress to her rightful place, but also providing a compelling portrait of the great Victorian novelist himself. The result is a thrilling literary detective story and a deeply compassionate work that encompasses all those women who were exiled from the warm, well-lighted parlors of Victorian England.', '2013-03-30T23:12:33.090Z'),
            (21, 'Benjamin Franklin: An Benjamin Franklin: An American Life', 'Walter Isaacson', 'https://images-na.ssl-images-amazon.com/images/P/074325807X.01._SX360_SCLZZZZZZZ_.jpg', 'HTML:In this authoritative and engrossing full-scale biography, Walter Isaacson, bestselling author of Einstein and Steve Jobs, shows how the most fascinating of America is founders helped define our national character./> Benjamin Franklin is the founding father who winks at us, the one who seems made of flesh rather than marble. In a sweeping narrative that follows Franklin is life from Boston to Philadelphia to London and Paris and back, Walter Isaacson chronicles the adventures of the runaway apprentice who became, over the course of his eighty-four-year life, America is best writer, inventor, media baron, scientist, diplomat, and business strategist, as well as one of its most practical and ingenious political leaders. He explores the wit behind Poor Richard is Almanac and the wisdom behind the Declaration of Independence, the new nation is alliance with France, the treaty that ended the Revolution, and the compromises that created a near-perfect Constitution.', '2011-11-20T23:12:33.090Z'),
            (23, 'John Adams', 'David McCullough', '	https://images-na.ssl-images-amazon.com/images/P/0743223136.01._SX360_SCLZZZZZZZ_.jpg
            ', 'The Pulitzer Prize�??winning, bestselling biography of America is founding father and second president that was the basis for the acclaimed HBO series, brilliantly told by master historian David McCullough.
            In this powerful, epic biography, David McCullough unfolds the adventurous life journey of John Adams, the brilliant, fiercely independent, often irascible, always honest Yankee patriot who spared nothing in his zeal for the American Revolution; who rose to become the second president of the United States and saved the country from blundering into an unnecessary war; who was learned beyond all but a few and regarded by some as "out of his senses"; and whose marriage to the wise and valiant Abigail Adams is one of the moving love stories in American history.', '2017-12-10T23:12:33.090Z'),
            (25, 'Washington: A Life', 'Ron Chernow', 'https://images-na.ssl-images-amazon.com/images/P/1594202664.01._SX360_SCLZZZZZZZ_.jpg', 'In "Washington : a Life" celebrated biographer Ron Chernow provides a richly nuanced portrait of the father of our nation, dashing forever the stereotype of a stolid, unemotional man, and revealing an astute and surprising portrait of a canny political genius who knew how to inspire people.', '2018-03-18T23:12:33.090Z'),
            (8, 'The Hidden Political Genius of an American Icon', 'John Ferling', 'https://images-na.ssl-images-amazon.com/images/P/1596914653.01._SX360_SCLZZZZZZZ_.jpg', 'Even compared to his fellow founders, George Washington stands tall. Our first president has long been considered a stoic hero, holding himself above the rough-and-tumble politics of his day. Now historian John Ferling peers behind that image, carefully burnished by Washington himself, to show us a leader who was not only not above politics, but a canny infighter--a master of persuasion, manipulation, and deniability. In the War of Independence, Washington used his skills to steer the Continental Army through crises that would have broken less determined men; he squeezed out rivals and defused dissent. Ending the war as a national hero, Washington "allowed" himself to be pressed into the presidency, guiding the nation with the same brilliantly maintained pose of selfless public interest. Ferling argues that not only was Washington one of America is most adroit politicians--the proof of his genius is that he is no longer thought of as a politician at all.--From publisher description.', '2022-04-19T23:12:33.090Z'),
            (4, 'Adams vs. Jefferson: The Tumultuous Election of 1800', 'John Ferling', 'https://images-na.ssl-images-amazon.com/images/P/0195167716.01._SX360_SCLZZZZZZZ_.jpg', 'It was a contest of titans: John Adams and Thomas Jefferson, two heroes of the Revolutionary era, once intimate friends, now icy antagonists locked in a fierce battle for the future of the United States. The election of 1800 was a thunderous clash of a campaign that climaxed in a deadlock in the Electoral College and led to a crisis in which the young republic teetered on the edge of collapse. Adams vs. Jefferson is the gripping account of a turning point in American history, a dramatic struggle between two parties with profoundly different visions of how the nation should be governed. The Federalists, led by Adams, were conservatives who favored a strong central government. The Republicans, led by Jefferson, were more egalitarian and believed that the Federalists had betrayed the Revolution of 1776 and were backsliding toward monarchy. The campaign itself was a barroom brawl every bit as ruthless as any modern contest, with mud-slinging, scare tactics, and backstabbing. The low point came when Alexander Hamilton printed a devastating attack on Adams, the head of his own party, in "fifty-four pages of unremitting vilification." The stalemate in the Electoral College dragged on through dozens of ballots. Tensions ran so high that the Republicans threatened civil war if the Federalists denied Jefferson the presidency. Finally a secret deal that changed a single vote gave Jefferson the White House. A devastated Adams left Washington before dawn on Inauguration Day, too embittered even to shake his rival is hand. With magisterial command, Ferling brings to life both the outsize personalities and the hotly contested political questions at stake. He shows not just why this moment was a milestone in U.S. history, but how strongly the issues--and the passions--of 1800 resonate with our own time.', '2021-05-21T23:12:33.090Z');
        `)
        .then((dbResult) => {
            console.log('Seed data was Done :)')
            res.sendStatus(200)
        }) 
        .catch((error) => {
            console.log(`Couldn't generate table into database ${error}`)
        })
    },

    getCategories: (req, res) => {
        sequelize.query(`
            SELECT * FROM categories;
        `)
        .then((dbResult) => {
            res.status(200).send(dbResult[0])
        })
        .catch((error) => {
            console.log(`Could not load data from database ${error}`)
            res.status(400).send(error)
        })
    },

    getBooks: (req, res) => {
        sequelize.query(`
            SELECT b.*, c.name FROM books b
            JOIN categories c ON b.category_id = c.id
            ORDER BY added_date DESC;
        `)
        .then((dbResult) => {
            res.status(200).send(dbResult[0])
        })
        .catch((error) => {
            console.log(`Could not load data from database ${error}`)
            res.status(400).send(error)
        })
    },

    createBook: (req, res) => {
        console.log(req.body)
        const {title, category_id, author, cover_image, abstract, added_date} = req.body
        sequelize.query(`
            INSERT INTO books(category_id, title, author, cover_image, abstract, added_date) 
            VALUES (${Number(category_id)}, '${title}', '${author}', 
            '${cover_image}', '${abstract}', '${added_date}');
        `)
        .then((dbResult) => {
            res.status(200).send(dbResult[0])
        })
        .catch((error) => {
            console.log(`Could not insert data into database ${error}`)
            res.status(400).send(error)
        })
    },

    updateBook: (req, res) => {
        console.log(req.body)
        sequelize.query(`
        
        `)
        .then((dbResult) => {
            res.status(200).send(dbResult[0])
        })
        .catch((error) => {
            console.log(`Could not update data into database ${error}`)
            res.status(400).send(error)
        })
    },
    
    deleteBook: (req, res) => {
        const { id } = req.params
        sequelize.query(`
            DELETE FROM books WHERE id = ${id}
        `)
        .then((dbResult) => {
            res.status(200).send(dbResult[0])
        })
        .catch((error) => {
            console.log(`Could not find ${id} into database for delete ${error}`)
            res.status(400).send(error)
        })
    },
}