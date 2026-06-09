export interface Work {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  images?: string[];
  technologies: string[];
  link?: string;
  details?: {
    overview: {
      ja: string;
      en: string;
    };
    concept?: {
      ja: string;
      en: string;
    };
  };
}

export const works: Work[] = [
  {
    id: "inpraiseofshadows",
    title: "In Praise of Shadows - Book Cover",
    category: "Class Assignment",
    description: "Book Cover Design",
    imageUrl: "/img/inpraiseofshadows/01.png",
    images: ["/img/inpraiseofshadows/01.png", "/img/inpraiseofshadows/02.png"],
    technologies: ["Photo Shoot", "DTP"],
    details: {
      overview: {
        ja: "⾕崎潤⼀郎『陰翳礼讃』の内容をもとに英語のタイプフェースを制作。これを使った表紙をデザインし、ダミー本を作成した。この作品は東京都⽴⼤学の授業「グラフィックデザイン実習I」の課題として制作された。",
        en: "I created an English typeface based on the content of Junichiro Tanizaki's In Praise of Shadows. I designed a book cover using this typeface and produced a dummy book. This work was created as an assignment for the Graphic Design Practice I course at Tokyo Metropolitan University.",
      },
      concept: {
        ja: "フィジカルな⼿法を使って制作したタイプフェースを制作するという課題に対して、『陰翳礼讃』のメインテーマである暗闇と光の対⽐をテーマにLEDライトの光を⽂字のシェイプに切り取り撮影、その際にテクスチャとして紙を利⽤することでぼんやりと滲んだ光をタイプフェースとして取り出すことができた。表紙デザインでは制作したフォントを主張しすぎない控えめなレイアウトで本の内容にそったデザインとした。",
        en: "For the assignment of creating a typeface using physical methods, I focused on the contrast between darkness and light, which is the main theme of In Praise of Shadows. I captured LED light cut into the shapes of letters by photography, and by using paper as a texture, I was able to extract a softly blurred light as a typeface. For the cover design, I used a modest layout that does not overly emphasize the created font, aligning with the content of the book.",
      },
    },
  },
  {
    id: "moss",
    title: "Moss",
    category: "Team Project",
    description: "Hack1 Grand Prix",
    imageUrl: "/img/moss/01.png",
    images: ["/img/moss/01.png", "/img/moss/02.png"],
    technologies: ["Electron"],
    link: "https://student.redesigner.jp/portfolios/PFbb658d2eafe707bfa803909676a33fa2",
    details: {
      overview: {
        ja: "「AIが答えを出す時代に、⼈間の思考を守るツール」として⽣成AIが何もかも⽣成する時代に考えることにフォーカスしたアプリケーション。ローカルファイルを解析して意味ベクトルを作成、3D空間に表⽰することで⾃分のメモや⽇記などの記録を「意味」をもとに閲覧・探索が可能を可能にし、⾃分の思考の偏りや分布を知ることで思索を深めるためのツール。第1回Hack1グランプリのために作成され、Designship賞を受賞。",
        en: "A tool to protect human thinking in an era where AI provides the answers. This application focuses on the act of thinking in an age where generative AI creates everything. By analyzing local files to create semantic vectors and displaying them in a 3D space, it enables users to browse and explore their own notes, diaries, and records based on meaning. It is a tool designed to deepen contemplation by allowing users to understand the biases and distribution of their own thoughts. Created for the 1st Hack1 Grand Prix, where it won the Designship Award.",
      },
      concept: {
        ja: "テクノロジーが普及しあらゆる⼈々の考えが受動的・インスタントに流れ込んでくる時代にあって、AIまでもがあらゆる知識を私たちに与えてくる。恩恵がある⼀⽅で、⾃分⾃⾝の考えを深く再考する時間を失ってはないだろうか、そう考えて制作した。本アプリケーションは⾃分のコンピュータにあるファイルを意味をもとに解析を⾏い、それらの関係性をもとに3D空間にファイルを配置する。このシステムによって、⾃分でも気が付かなかった⾃分⾃⾝の思考やアイデアの種、そのつながりを再考することを期待している",
        en: "In an era where technology is widespread and everyone's ideas flow in passively and instantaneously, even AI provides us with all kinds of knowledge. While there are benefits to this, I created this application out of a concern that we may be losing the time to deeply rethink our own ideas. This application analyzes files on your computer based on their meaning and arranges them in a 3D space based on the relationships between them. Through this system, I hope to encourage users to rethink their own thoughts, the seeds of their ideas, and their connections, which they may not have even been aware of themselves.",
      },
    },
  },
  {
    id: "archetype",
    title: "archeType",
    category: "Interactive Art",
    description: "Interactive Art on the Web",
    imageUrl: "/img/archetype/01.png",
    images: [
      "/img/archetype/01.png",
      "/img/archetype/02.png",
      "/img/archetype/03.png",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Three.js"],
    link: "https://tmu-2023-net-1.github.io/sakamura/",
    details: {
      overview: {
        ja: "archeType はWeb上で体験できるインタラクティブアートです。\n作品の構造は非常にシンプルで、入力した文字が立体となって落下していくというものです。\nこの作品は東京都立大学の授業「ネットワーク実習I」の課題として制作されました。",
        en: 'archeType is a Interactive art that you can experience throw the web site.\nThe structure of the experience is so simple. You can input text and it will fall down as 3D object.\nThe project was created as a class assignment for the course "Network Practical Exercises I" at Tokyo Metropolitan University.',
      },
      concept: {
        ja: "本作品はメディアとして圧倒的に普及しつつも、その永続性に確証のないWebという媒体の儚さに着目し、視覚化を試みたものです。\n構造はいたってシンプルで、入力した文章がその場に留まることなく崩れ、落下していってしまうというものです。Webに託した情報の存在の不確かさを、崩壊・落下という物質が時間と共に朽ちていく様になぞらえて表現しました。\nタイトルは「原型」を指し、文字が文章から解き放たれ、かたちとして還元される様を表しています。\n機能としてのWebの不完全性を表すと同時に、Webを通じた即時的な情報を、私たちが普段からどう見ているのかをも再認識させるような作品を目指しました。",
        en: 'This work focuses on the transience of the medium of the Web, which is overwhelmingly popular as a medium but has no certainty of its permanence, and attempts to visualize it.\n The structure is very simple: the input text is destroyed and falls down without staying in place. The uncertainty of the existence of information entrusted to the Web is expressed as a material that decays and falls over time.\n The title refers to "original form" and represents the release of characters from the text and their reduction to form.\n It aims to express the incompleteness of the Web as a function and at the same time to make us re-recognize how we usually look at the immediate information through the Web.',
      },
    },
  },
  {
    id: "soundscape",
    title: "Soundscape",
    category: "Interactive Art",
    description: "Sound Visualization Installation Art",
    imageUrl: "/img/soundscape/01.png",
    technologies: ["Processing", "Kinect"],
    link: "",
    details: {
      overview: {
        ja: "Soundscapeはプロジェクターを用いて展開される、全身で体感するインタラクティブアートです。\n鑑賞者は作品の前を歩くという至ってシンプルな動作によって作品に参加することができ、鑑賞者の位置によって作品が変化していきます。\n本作品はタイトルの通りSoundscapeを題材に、世界の様々な場所、瞬間を光と音によって体験できます。\nこの作品は東京都立大学の授業「インタラクティブアート演習・実習I」の課題として制作されました。",
        en: 'Soundscape is an interactive art that you can experience with your whole body using a projector.\nThe viewer can participate in the work by simply walking in front of it, and the work changes depending on the viewer\'s position.\nAs the title suggests, this work is based on Soundscape, and you can experience various places and moments around the world through light and sound.\nThis work was created as a class assignment for the course "Interactive Art Exercises and Exercises I" at Tokyo Metropolitan University.',
      },
      concept: {
        ja: "本作品は世界に存在する、視覚情報としての光と聴覚情報としての音の縮図として制作し、この作品の前に立つことで小さな世界が目の前に立ち現れることを目指しました。\n音と光のインタラクティブアートでありながらも、鑑賞者の能動的な行動は促しません。鑑賞者は作品の前を歩くだけで参加でき、特別なジェスチャーを行う必要はありません。それは我々が世界に存在する光や音に対して特別な行動を起こすことなく、ただ存在することでそれらを体験していることに似ています。",
        en: "This work was created as a miniature of light as visual information and sound as auditory information, aiming to make a small world appear in front of you by standing in front of this work.\nAlthough it is an interactive art of sound and light, it does not encourage the viewer to take active action. The viewer can participate in the work just by walking in front of it, and there is no need to make a special gesture. It is similar to the fact that we experience them by simply existing without taking any special action against the light and sound that exist in the world.",
      },
    },
  },
  {
    id: "enlightnment",
    title: "enLightnment",
    category: "Interactive Art",
    description: 'Interactive Art for "not moving"',
    imageUrl: "/img/enlightnment/01.png",
    technologies: ["Arduino"],
    link: "",
    details: {
      overview: {
        ja: "enLightnmentは「何もしない」を主眼に置いたインタラクティブアートです。瞑想を促す装置として機能し、集中に応じてオブジェクトの持つ光が強くなっていき、集中力を高めるために必要な「何もしない」を視覚的にもわかりやすく体験することができます。\nこの作品は東京都立大学の授業「インタラクティブアート演習・実習I」の課題として制作されました。",
        en: 'enLightnment is an interactive art that focuses on "Do Nothing". It functions as a device to promote meditation, and the light of the object becomes stronger depending on the concentration, so that you can visually and easily experience the "Do Nothing" necessary to increase your concentration.\n This work was created as a class assignment for the course "Interactive Art Exercise and Practice I" at Tokyo Metropolitan University.',
      },
      concept: {
        ja: "本作品を制作する際に、現代の生活を送る私たちが「何もしない」ことの難しさを感じました。私たちは常に何かをしているという状態にあり、何もしないことが難しいのです。また、現代は常に何かに注意を惹きつけられるような環境にあり、自分と向き合う時間が少なくなっていると感じました。そこで、私たちが「何もしない」ことを視覚的に体験できるような作品を通して、自分と向き合う時間を作ることができればと考えました。",
        en: "This work was created as a miniature of light as visual information and sound as auditory information, aiming to make a small world appear in front of you by standing in front of this work. \n Although it is an interactive art of sound and light, it does not encourage the viewer to take active action. The viewer can participate in the work just by walking in front of it, and there is no need to make a special gesture. It is similar to the fact that we experience them by simply existing without taking any special action against the light and sound that exist in the world.",
      },
    },
  },
  {
    id: "flow-album",
    title: "Flow Album",
    category: "Web Content",
    description: "Photo album using 3D space",
    imageUrl: "/img/flow-album/01.png",
    images: [
      "/img/flow-album/01.png",
      "/img/flow-album/03.png",
      "/img/flow-album/04.png",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    link: "https://flow-album.vercel.app/",
    details: {
      overview: {
        ja: "3D空間を使用した写真アルバムとしてのWebサイト。平面グリッドが一般的なアルバムに対してXYZ方向に写真を配置し、自由にズームインアウト、クリックによって詳細を見ることが可能。",
        en: "Web site as a photo album using 3D space. In contrast to albums that generally use a flat grid, photos are arranged in XYZ orientation and can be freely zoomed in and out, and details can be viewed by clicking on them.",
      },
      concept: {
        ja: "一般的なアルバムは日付順、グリッド状に写真を配置するが、これは必ずしも私たちの思い出の記憶の仕方と同じではないと考えた。写真を3D空間に自由に配置することによって記憶を遡る体験を表現。写真の配置はランダムと撮影時の位置情報を用いた2種類を閲覧可能で、これらはアニメーションを持って切り替わり、単一の写真としてでなくすべての写真を繋がりをもった群として見ることができる。",
        en: "Although typical albums arrange photos in date order and in a grid pattern, we thought that this is not necessarily the same as the way we remember our memories. This project expresses the experience of going back in memory by freely arranging photos in a 3D space. The photos can be viewed randomly or by using the location information at the time the photos were taken, and they can be animated and switched, allowing the viewer to see all the photos as a group with connections rather than as a single photo.",
      },
    },
  },
  {
    id: "spotify_analyzer",
    title: "Spotify Analyzer",
    category: "Web Content",
    description: "Analyzer for Spotify",
    imageUrl: "/img/spotify_analyzer/01.png",
    images: ["/img/spotify_analyzer/01.png", "/img/spotify_analyzer/02.png"],
    technologies: ["Next.js", "Tailwind CSS", "Spotify API"],
    link: "https://sptf-anlz.vercel.app/",
    details: {
      overview: {
        ja: "Spotify APIを使用したSptofiy上での視聴履歴の分析が可能なWebページ。余分なエレメントを排した、必要十分な構成とした。",
        en: "A web page for analyzing listening history on Spotify using the Spotify API, designed with a minimalistic structure that includes only the necessary elements.",
      },
      concept: {
        ja: "Spotifyの提供するAPIを使用したビジュアライゼーションを構想していたが、使用予定のAPIの提供が終了したことに伴い、現在使用可能なAPIとそれに付随するコンポーネントを暫定的に表示している。カラーテーマは公式のデザインアセットから使用し、一覧性とSpotifyユーザーへの親和性を重視した。",
        en: "I had been planning a visualization using Spotify's API, but with the discontinuation of the intended API, I am currently displaying available APIs and their associated components as a temporary measure. The color theme is based on Spotify's official design assets, prioritizing readability and compatibility with Spotify users.",
      },
    },
  },
  {
    id: "somokuto",
    title: "草木塔",
    category: "Web Content",
    description: "Website for read 草木塔",
    imageUrl: "/img/somokuto/01.png",
    images: ["/img/somokuto/01.png", "/img/somokuto/02.png"],
    technologies: ["Vite", "Tailwind CSS"],
    link: "https://somokuto.vercel.app/",
    details: {
      overview: {
        ja: " 種田山頭火の詩集「草木塔」を読むためのWebサイト。機能はスクロールおよびタッチによる前後への移動のみ。詩の情報は青空文庫より引用。 ",
        en: "A website for reading Taneda Santōka's poetry collection *Sōmoku-tō* (*Grass and Tree Pagoda*). The only functionalities are moving forward and backward through the poems using scroll or touch gestures. The poetry information is sourced from Aozora Bunko.",
      },
      concept: {
        ja: "自身が好きな詩集を気軽に、余計な情報を排して読みたいという動機から制作。操作は主に1つずつ閲覧する方法を取っているが、700を超える詩を自由に行き来できるようにRandomボタンを設置し思いがけない場所に移動できるようになっている。localStorageに現在の位置を保存することで再び訪問した際に前回の続きから読めるようになっている。",
        en: "Created out of a desire to read a favorite poetry collection freely and without unnecessary information, this website allows readers to focus solely on the poems. While the main navigation displays one poem at a time, a 'Random' button lets users jump to unexpected places among the 700+ poems. The current position is saved in localStorage, so readers can continue from where they left off when revisiting the site. ",
      },
    },
  },
  {
    id: "imdb_notion",
    title: "IMDb to Notion",
    category: "Web Content",
    description: "Chrome Extension for IMDb to Notion",
    imageUrl: "/img/imdb_notion/01.png",
    images: ["/img/imdbtonotion/01.png", "/img/imdbtonotion/02.png"],
    technologies: ["CRXJS", "Notion API"],
    link: "https://github.com/menma275/imdb_notion",
    details: {
      overview: {
        ja: "鑑賞した映画の情報や感想をNotionで管理するためのChrome Extension。\nIMDb의 영화 페이지から情報を取得し、ポップアップウィンドウからコメントやレーティングをNotionに自動で記録することができます。",
        en: "Chrome Extension for managing movie information and impressions watched in Notion.\nYou can get information from the IMDb movie page and automatically record comments and ratings in Notion.",
      },
      concept: {
        ja: "IMDbや他のサービスの提供する映画の鑑賞記録のためのサービスでは他のユーザの情報がノイズになったり自分の残したい情報が記録できなかったりと不自由が多かったため、Notionのデータベースに記録するという形で情報の操作性と自由度の高い映画の鑑賞記録用のシステムを作成しました。",
        en: "Since the services provided by IMDb and other services for recording movie viewing records were inconvenient due to noise from other users' information and the inability to record the information I wanted to leave, I created a movie viewing record system with high operability and freedom of information by recording it in a Notion database.",
      },
    },
  },
  {
    id: "proofofx_shibuya",
    title: "Proof of X in DIG SHIBUYA",
    category: "Web Content",
    description: "Website for Blockchain event",
    imageUrl: "/img/proofofx_shibuya/01.png",
    images: ["/img/proofofx_shibuya/01.png", "/img/proofofx_shibuya/02.png"],
    technologies: ["Next.js", "Tailwind CSS"],
    details: {
      overview: {
        ja: "本Webサイトはブロックチェーンに主眼を置いた「Proof of X」のために制作されました。\nこのWebサイトはイベントの概要や出展作品を紹介するなど、基本的な情報を提供することを目的としています。協力イベントであるDIG SHIBUYAのデザインコンセプトからインスピレーションを受け、直接的でない形でデザインに反映させました。",
        en: 'This website was created for "Proof of X", which focuses on blockchain.\nThis website aims to provide basic information such as an overview of the event and an introduction to the exhibits. Inspired by the design concept of DIG SHIBUYA, a collaborative event, it was reflected in the design in an indirect way.',
      },
      concept: {
        ja: "本Webサイトは制作から公開までの期間が短かったことから、デザインと開発を同時に、1人で行ないました。キービジュアルと展示のコンセプトを考慮してデザインを行い、スマートフォンでの見やすさも考慮してレスポンシブに重きをおいて開発を行いました。",
        en: "Since the period from production to release of this website was short, I designed and developed it at the same time, by myself. I designed it considering the key visual and the concept of the exhibition, and developed it with a focus on responsiveness, considering the ease of viewing on smartphones.",
      },
    },
  },
  {
    id: "mojitoodoru",
    title: "もじとおどる",
    category: "Web Content",
    description: "Website for our own ZINE",
    imageUrl: "/img/mojitoodoru/01.png",
    images: [
      "/img/mojitoodoru/01.png",
      "/img/mojitoodoru/02.png",
      "/img/mojitoodoru/03.png",
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://mojitoodoru.zine.sugimototatsuo.com/",
    details: {
      overview: {
        ja: "本Webサイトは東京都立大学の授業「ネットワーク実習I」の履修者たちの制作課題をまとめた作品集としてのZINE『もじとおどる - JavaScriptで楽しむWebと文字』の紹介ページとして制作されました。\nこのWebサイトはZINEの内容を紹介するとともに、ZINEの購入ページとしても機能します。",
        en: 'This website was created as an introduction to the ZINE "もじとおどる - JavaScriptで楽しむWebと文字", which is a collection of works created by students taking the course "Network Practical Exercises I" at Tokyo Metropolitan University.\nThis website introduces the contents of the ZINE and also functions as a purchase page for the ZINE.',
      },
      concept: {
        ja: "制作したZINEを紹介するためのページであるので、情報の完結性と購入ページへのアクセスを容易にし、掲載作品はWebで動作するものであるため、本サイトからアクセスできるように誌面と連動した掲載の方法を取りました。",
        en: "Since this is a page to introduce the ZINE that I created, I made the information complete and made it easy to access the purchase page. Since the works are those that work on the Web, I took a method of posting that is linked to the magazine so that they can be accessed from this site.",
      },
    },
  },
  {
    id: "gundi",
    title: "Gundi",
    category: "Web Content",
    description: "Decentralized Chat Space",
    imageUrl: "/img/gundi/01.png",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    link: "https://gundi.gitbook.io/gundi-decentralized-chat-space/",
    details: {
      overview: {
        ja: "Gundiは新しいコミュニケーションの形を提案するチャットサービスです。\nこのサービスは絵文字のみや漢字1文字のみなど、制限された手段のなかで、従来の加速型のコミュニケーションとは異なる、ゆったりとしたコミュニケーションを実現します。\nこの作品はCCBT(Civic Creative Base Tokyo)で行われたFuture Ideations Camp Vol.2 setup()で制作したconVerseを軸に発展して制作されました。",
        en: "Gundi is a chat service that proposes a new form of communication.\nThis service enables a relaxed form of communication that is different from the conventional acceleration-based communication, such as using only one emoji or one kanji character.\nThis work was developed based on conVerse, which was created at Future Ideations Camp Vol.2 setup() held at CCBT (Civic Creative Base Tokyo).",
      },
      concept: {
        ja: "本サービスは、負の感情により加速度を増すSNSの現状に着目し、感情を加速させない、ゆったりとしたコミュニケーションを実現することを目的としています。\n本サービスの特徴は制限されたコミュニケーション手法と平面的に展開されるインターフェースにあります。絵文字や漢字1文字などの極度に制限された状況下でのコミュニケーションは、必ずしも情報を伝達することに特化しておらず、このチャットルームにおいて「誰かと存在している」ことを実感することを目的としています。また、平面的に展開されるインターフェースは、一般的なスレッド型でなく平面に付箋を置くように2次元的にチャットを行うことができ、各メッセージの距離感や位置などを意識することで、よりリアルなコミュニケーションを実現します。\nこの2つの特徴により、本サービスは従来のコミュニケーションツールとは異なる、新しいコミュニケーションの形を提案します。",
        en: 'This service aims to realize a relaxed form of communication that does not accelerate emotions by focusing on the current situation of Social Media, which accelerates emotions due to negative emotions.\n The feature of this service lies in the limited communication method and the interface that is developed in a planar manner. The communication under extremely limited conditions such as using only one emoji or one kanji character is not necessarily specialized in transmitting information, but rather aims to realize the fact that "someone is present" in this chat room. In addition, the interface developed in a planar manner allows you to chat in two dimensions, like placing a sticky note on a plane, rather than the general thread type, and by being conscious of the distance and position of each message, it is possible to realize more realistic communication.\n With these two features, this service proposes a new form of communication that is different from conventional communication tools.',
      },
    },
  },
  {
    id: "converse",
    title: "conVerse",
    category: "Web Content",
    description: "The project that preceded Gundi",
    imageUrl: "/img/converse/01.png",
    technologies: ["HTML", "CSS", "JavaScript", "MongoDB"],
    link: "",
    details: {
      overview: {
        ja: "conVerseは新しいコミュニケーションの形を提案するチャットサービスです。\nこのサービスは絵文字のみや漢字1文字のみなど、制限された手段のなかで、従来の加速型のコミュニケーションとは異なる、ゆったりとしたコミュニケーションを実現します。\nこの作品はCCBT(Civic Creative Base Tokyo)で行われたFuture Ideations Camp Vol.2 setup()で制作し、「Gundi」と名前を変えてプロジェクトを継続しています。",
        en: 'conVerse is a chat service that proposes a new form of communication.\nThis service enables a relaxed form of communication that is different from the conventional acceleration-based communication, such as using only one emoji or one kanji character.\nThis work was created at Future Ideations Camp Vol.2 setup() held at CCBT (Civic Creative Base Tokyo) and continues the project under the name "Gundi".',
      },
      concept: {
        ja: "詳細は「Gundi」ページに記載しています。",
        en: 'See the "Gundi" page for details.',
      },
    },
  },
  {
    id: "nove2023",
    title: "有機的、無機的。",
    category: "Web Content",
    description: "Website for our own exhibition",
    imageUrl: "/img/nove2023/01.png",
    images: [
      "/img/nove2023/01.png",
      "/img/nove2023/02.png",
      "/img/nove2023/03.png",
    ],
    technologies: ["HTML", "CSS", "Three.js", "WebGL"],
    link: "https://nothingof.github.io/nove2023_web/",
    details: {
      overview: {
        ja: "本Webサイトは東京都立大学の大学祭で開催されたインタラクティブアートの展示「有機的、無機的」の広報のために制作されました。バックグラウンドにはThree.jsとWebGLを用いて、有機的な形状と無機的な形状が溶け合う様子を描画しています。",
        en: 'This website was created to promote the exhibition "Organic and Inorganic", which was held at the University Festival of Tokyo Metropolitan University. In the background, Three.js and WebGL are used to draw the process of organic and inorganic shapes melting together.',
      },
      concept: {
        ja: "展示の軸である「有機的、無機的」を展示内容とは異なるビジュアルでありながらも一目でタイトルとの一貫性を持たせることを目指しました。また、ファーストビューの文字情報を大胆に配置することでWebサイトでありながらもポスター的な存在感を持たせることを意識しました。",
        en: "I aimed to give a consistent visual impression with the title at a glance, even though it was a different visual from the exhibition content, which is the axis of the exhibition. In addition, I was conscious of giving a poster-like presence to the website by boldly placing the character information of the first view.",
      },
    },
  },
  {
    id: "proofofx_2023",
    title: "Proof of X 2023",
    category: "Web Content",
    description: "Website for Blockchain event",
    imageUrl: "/img/proofofx_2023/01.png",
    images: ["/img/proofofx_2023/01.png", "/img/proofofx_2023/02.png"],
    technologies: ["Next.js", "Chakra UI"],
    link: "",
    details: {
      overview: {
        ja: "本Webサイトはブロックチェーンに主眼を置いた「Proof of X」のために制作されました。\nこのWebサイトはイベントの概要や出展作品を紹介するなど、基本的な情報を提供することを目的としています。ファーストビューには変化し続けるメインビジュアルが配置され、強力な印象を与えます。本Webページは数人のメンバーで作成され、絶えず更新される情報とコンテンツの対応を継続して行いました。",
        en: 'This website was created for "Proof of X", which focuses on blockchain.\nThis website aims to provide basic information such as an overview of the event and an introduction to the exhibits. The first view has a main visual that continues to change, giving a strong impression. This web page was created by several members, and we continued to update the information and content.',
      },
      concept: {
        ja: "本Webサイト制作はデザインと開発が分離していたため、PSDデータを再現するという役割を担当しましたが、急遽制作をしなければならないページが増え、それまでのデザインを踏襲してデザインと開発を同時に1人で行うパートがありました。この経験が自分だけのデザインの思考法でなく、他者の思考法からデザインをするという経験を得ました。",
        en: "Since the design and development were separated, I was in charge of reproducing the PSD data, but there was a part where I had to design and develop at the same time by myself because the number of pages that had to be created in a hurry increased and I had to follow the design up to that point. This experience gave me the experience of designing from the perspective of others, not just my own design thinking.",
      },
    },
  },
  {
    id: "ephemeral",
    title: "ephemeral",
    category: "Generative Art",
    description: "Generative Art published on fxhash",
    imageUrl:
      "https://gateway.fxhash.xyz/ipfs/QmaNXC4zJTo9DgH3qQx1wTkkuJBaJt7q8o1EgCXUF99ZMA",
    technologies: ["Generative Art", "fxhash"],
    link: "https://www.fxhash.xyz/generative/slug/ephemeral-2",
  },
  {
    id: "cube",
    title: "cube",
    category: "Generative Art",
    description: "Generative Art published on fxhash",
    imageUrl:
      "https://media.fxhash.xyz/w_768/QmeSPebTJpN8pJCPzWHvMNK7cTKJadx6uki8BpST8xpt9E",
    technologies: ["Generative Art", "fxhash"],
    link: "https://www.fxhash.xyz/generative/27656",
  },
  {
    id: "melt",
    title: "melt",
    category: "Generative Art",
    description: "Generative Art published on fxhash",
    imageUrl:
      "https://media.fxhash.xyz/w_768/QmenHA7u62bYAd7GePMp84S4tkM734YFT8tvs5aUa1Nkjd",
    technologies: ["Generative Art", "fxhash"],
    link: "https://www.fxhash.xyz/generative/25883",
  },
  {
    id: "round",
    title: "round",
    category: "Generative Art",
    description: "Generative Art published on fxhash",
    imageUrl:
      "https://media.fxhash.xyz/w_768/QmQuqvBA9DfkpS7PzZL3PjsqqCNJYcRbrbCAvSpo3Fwh3a",
    technologies: ["Generative Art", "fxhash"],
    link: "https://www.fxhash.xyz/generative/23320",
  },
  {
    id: "tile",
    title: "tile",
    category: "Generative Art",
    description: "Generative Art published on fxhash",
    imageUrl:
      "https://media.fxhash.xyz/w_768/QmWpg81PBaamo3VVLkgBtvqDv6s8joxaxNi2arjTC3HbTf",
    technologies: ["Generative Art", "fxhash"],
    link: "https://www.fxhash.xyz/generative/21355",
  },
  {
    id: "pack",
    title: "pack",
    category: "Generative Art",
    description: "Generative Art published on fxhash",
    imageUrl:
      "https://media.fxhash.xyz/w_768/QmNqSVqNCTcKAVkmhC9DkNhy5bWzz4PeUk1SCuqowxWnTA",
    technologies: ["Generative Art", "fxhash"],
    link: "https://www.fxhash.xyz/generative/20035",
  },
  {
    id: "line",
    title: "line",
    category: "Generative Art",
    description: "Generative Art published on fxhash",
    imageUrl:
      "https://media.fxhash.xyz/w_768/QmXxjhgxuFRQ4KpnCC5Fr9vaxG3M3npkUSxKNyizwmMZn9",
    technologies: ["Generative Art", "fxhash"],
    link: "https://www.fxhash.xyz/generative/18944",
  },
  {
    id: "quarter",
    title: "quarter",
    category: "Generative Art",
    description: "Generative Art published on fxhash",
    imageUrl:
      "https://media.fxhash.xyz/w_768/QmY5ZvPjb6Yd7cWWbD6CsXMMC6cD9WeLTak3HXhnfspA6q",
    technologies: ["Generative Art", "fxhash"],
    link: "https://www.fxhash.xyz/generative/18681",
  },
  {
    id: "overlap",
    title: "overlap",
    category: "Generative Art",
    description: "Generative Art published on fxhash",
    imageUrl:
      "https://media.fxhash.xyz/w_768/QmSUZUy33xz7wBUndDFbJ6YcfRdKf8itzDJrHNydkJ34pa",
    technologies: ["Generative Art", "fxhash"],
    link: "https://www.fxhash.xyz/generative/18146",
  },
  {
    id: "arc",
    title: "arc",
    category: "Generative Art",
    description: "Generative Art published on fxhash",
    imageUrl:
      "https://media.fxhash.xyz/w_768/QmYJMVazWy3UGg7VkmCsUGHT4RonSS948bWkxM55FqVdHY",
    technologies: ["Generative Art", "fxhash"],
    link: "https://www.fxhash.xyz/generative/18032",
  },
  {
    id: "cell",
    title: "cell",
    category: "Generative Art",
    description: "Generative Art published on fxhash",
    imageUrl:
      "https://media.fxhash.xyz/w_768/QmW3Eszjptm33ZfG7cDRD1x3gV2WoucZuWpECm1Zzp1dgh",
    technologies: ["Generative Art", "fxhash"],
    link: "https://www.fxhash.xyz/generative/17341",
  },
  {
    id: "link",
    title: "link",
    category: "Generative Art",
    description: "Generative Art published on fxhash",
    imageUrl:
      "https://media.fxhash.xyz/w_768/QmWGJeWVSx13mbfW3eS3PfyYdpi56tgWSzcBVF3U7QBRAH",
    technologies: ["Generative Art", "fxhash"],
    link: "https://www.fxhash.xyz/generative/15955",
  },
  {
    id: "frame",
    title: "frame",
    category: "Generative Art",
    description: "Generative Art published on fxhash",
    imageUrl:
      "https://media.fxhash.xyz/w_768/QmXmnbr429NX2siEJPkdHkLNpDi74YXt85V4PDXGPipuhY",
    technologies: ["Generative Art", "fxhash"],
    link: "https://www.fxhash.xyz/generative/15002",
  },
  {
    id: "pinch",
    title: "pinch",
    category: "Generative Art",
    description: "Generative Art published on fxhash",
    imageUrl:
      "https://media.fxhash.xyz/w_768/QmXAm8FjPTLUEM4g4rqBoMJiZVJw6bVxSwDiCuJypjiQQp",
    technologies: ["Generative Art", "fxhash"],
    link: "https://www.fxhash.xyz/generative/14889",
  },
  {
    id: "flow",
    title: "flow",
    category: "Generative Art",
    description: "Generative Art published on fxhash",
    imageUrl:
      "https://media.fxhash.xyz/w_768/QmQAJoyBbbvX3xaAWxAcAgtwmPGJJPH9arp8CkofD4mwFj",
    technologies: ["Generative Art", "fxhash"],
    link: "https://www.fxhash.xyz/generative/13865",
  },
  {
    id: "flare",
    title: "flare",
    category: "Generative Art",
    description: "Generative Art published on fxhash",
    imageUrl:
      "https://media.fxhash.xyz/w_768/Qmbe6nRktdenHpfMUcYE4ZheBPcx4Pwu3H2yp34TVTXRPw",
    technologies: ["Generative Art", "fxhash"],
    link: "https://www.fxhash.xyz/generative/13318",
  },
];
