'use client';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FadeInText = () => {
  const controls = useAnimation();
  const [elementTop, setElementTop] = useState(null);

  const onScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > elementTop - window.innerHeight / 1.5) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }
  };

  useEffect(() => {
    const element = document.getElementById('fade-in-text');
    setElementTop(element.offsetTop);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [elementTop]);

  return (
    <>
      <h1>I've written some things</h1>
      <motion.div
        id="fade-in-text"
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a
          eaque, maiores veritatis perspiciatis repellendus quo autem
          accusantium nostrum facere accusamus quidem, dolorem labore. A minus
          inventore, accusamus, voluptates totam dolor magni numquam velit
          praesentium corporis sunt! Repellendus facere cumque voluptates
          laudantium quasi natus id quo, earum aut aspernatur, magni
          voluptatibus expedita corrupti. Tempore quasi alias corporis eaque non
          illum commodi architecto recusandae soluta temporibus veritatis
          voluptatibus placeat exercitationem facere quisquam voluptatem, velit
          quo cumque culpa, omnis aut ipsa qui corrupti veniam. Iure corrupti
          ipsa similique, odio nostrum suscipit beatae obcaecati repellendus
          voluptate fugit numquam a culpa esse quam! Iste laborum dolore
          consequatur tenetur quae magnam odit inventore possimus vero adipisci,
          corporis consequuntur corrupti blanditiis delectus enim ipsam fugit
          nam explicabo id dolores? Facere repellat tempora, eum recusandae
          consequatur dicta tenetur fugit quo iusto distinctio, sapiente,
          aspernatur quos! Nisi quos facere necessitatibus, minus maiores
          pariatur corrupti obcaecati cum expedita commodi provident tempore
          animi? Dicta assumenda doloremque debitis eaque accusantium maiores
          vel. Autem natus qui explicabo laudantium tempore optio placeat
          aperiam ipsum voluptates rem maxime voluptatem modi ipsam nesciunt,
          fugiat eius recusandae id nisi molestiae provident ducimus alias culpa
          asperiores corporis! Assumenda mollitia aliquid odio voluptates
          explicabo, tenetur quidem dolorem rem. Est quo excepturi in quia
          perferendis atque asperiores eligendi odio corrupti voluptates
          corporis expedita error minima a aut explicabo commodi tempora ab,
          nostrum vel placeat fugiat rem rerum impedit. Tempora nulla assumenda
          dolorum sit temporibus fuga excepturi architecto, est harum odio
          debitis! Officiis consequuntur enim quas deserunt odit in rerum quis
          amet nisi deleniti dolores quisquam minima ab voluptas aliquid
          explicabo quod praesentium ut aliquam vitae doloremque ea voluptatum,
          vel sit. Impedit, ipsam. Laudantium nobis, aliquam amet ut beatae
          magni atque voluptatibus, expedita rerum quasi odio nisi veniam?
          Quisquam vero ex iusto labore voluptas saepe explicabo tempora iure
          quam impedit. Id ab reprehenderit dolorem vitae culpa sint eveniet cum
          laudantium dolores eaque cupiditate nulla doloremque, tempora
          voluptatum sequi a, voluptatibus et tempore molestias obcaecati
          possimus blanditiis esse maiores iste! In reprehenderit explicabo
          praesentium quis, repellendus veniam consequuntur eos optio ipsam,
          consectetur fuga sapiente facere vel dignissimos blanditiis numquam
          quaerat fugiat provident ipsa incidunt. Delectus, nihil alias, a
          officiis, sunt cupiditate quis vitae odio ea veritatis molestiae
          blanditiis optio. Adipisci repellendus quod iure eaque quidem rerum
          quam sint minima saepe hic? Debitis veniam voluptate blanditiis minus
          nam fugiat. Possimus ex eligendi quia inventore labore incidunt optio
          molestias dolor sit quam eaque impedit fugiat voluptatibus architecto,
          fugit exercitationem nostrum ea quibusdam. Atque accusamus veritatis
          reprehenderit recusandae placeat ratione delectus maiores amet optio
          quos, sed labore deserunt molestias illum praesentium. Eveniet totam
          vitae a, laudantium asperiores quod debitis harum dolor saepe facilis
          voluptate amet, odio eos! Vero, a. Ratione, iure natus! Veritatis
          cupiditate, at adipisci nam cum sint maiores necessitatibus nulla
          asperiores provident repellendus alias. Tempore odio quo omnis magnam
          ipsa temporibus corporis voluptas non laudantium, hic dolores
          molestiae, ex aspernatur cupiditate harum excepturi doloribus
          veritatis atque alias cumque nihil tempora? Voluptates mollitia magnam
          in cupiditate veniam quibusdam quos asperiores nulla, cumque ab rem
          adipisci quaerat ut qui doloremque aut quas repellendus quae
          repudiandae consectetur a officiis culpa. Delectus odit, aperiam, sed
          sunt quo et eligendi magni nulla deleniti fugiat necessitatibus. Ab
          molestiae delectus cupiditate ipsam ea dolorum labore soluta sequi
          excepturi, quo numquam, ipsum a sunt sed quia similique voluptatem qui
          explicabo alias expedita debitis natus amet quod? Et consectetur iste
          itaque odit beatae laborum autem adipisci assumenda nam, fugit
          quibusdam necessitatibus qui velit distinctio accusantium animi
          architecto recusandae doloribus minus natus vitae laboriosam ipsam.
          Accusamus temporibus dignissimos autem quam dolores, architecto
          incidunt. Nostrum dolorum velit aspernatur itaque et modi eius
          perspiciatis ipsam! In maxime, veniam repudiandae facilis numquam
          maiores officiis delectus consectetur quos non vel commodi sapiente
          deleniti, dolorem eum laborum libero, ab iure? Repudiandae consequatur
          expedita placeat at dolorem voluptatum perspiciatis est ea, earum
          voluptates omnis rem iste eos tempora fugit quae nobis ipsa a? Earum,
          dignissimos! Voluptate consequatur, vero animi quae enim, accusantium
          aut voluptas quod, possimus maiores aliquam molestiae eum porro
          repellendus. Eius enim nobis, fugiat obcaecati temporibus voluptatem
          ratione eveniet at! Est minus nostrum sed ipsam nihil aspernatur et
          qui vero, excepturi laborum voluptatibus quae consequuntur libero,
          facilis asperiores odio. Nisi doloremque voluptate enim non, modi
          dolore at, dolorem similique omnis perferendis consequatur qui
          consequuntur officia illum, reprehenderit aliquid iste a cum nemo eum
          nesciunt voluptatibus laudantium quibusdam? Velit recusandae, aut cum
          ab sint accusamus error? Fuga sunt incidunt aliquid aliquam molestiae
          eaque, animi reiciendis nostrum voluptate, neque autem. Dicta ex
          tempore sed animi nobis exercitationem officiis perferendis ratione
          reprehenderit laudantium blanditiis, aperiam delectus aspernatur
          asperiores illo vitae minima! Nemo ipsa nihil explicabo nam. Porro
          impedit sit quisquam possimus suscipit adipisci consequatur cum sunt.
          Sequi velit id dolorem officia veritatis neque voluptatum veniam omnis
          dolorum quibusdam nobis nihil quod rerum consequatur, odio dolore
          consequuntur similique quas cum distinctio totam? Nesciunt minus
          impedit voluptate quaerat, doloremque rem officiis asperiores ipsa
          libero vel. Tempora excepturi, placeat, rerum magnam, aspernatur
          blanditiis minus error optio ab cupiditate non quam? Rem velit
          cupiditate numquam sapiente nihil fugiat facere ex cum laudantium ea
          obcaecati eos fugit dignissimos, debitis amet, ut delectus quod.
          Inventore vero est dicta? Corrupti optio, similique commodi architecto
          atque reprehenderit facere error quisquam blanditiis. Ut distinctio
          atque dolor possimus quos! Laboriosam voluptatum dolor modi est
          inventore repellat dignissimos enim eum, repellendus voluptatem dolore
          facilis veritatis voluptates iste alias? Nesciunt facilis in repellat
          voluptatum labore debitis doloremque error corporis minima laborum
          illum quaerat suscipit cumque, pariatur repudiandae velit aperiam est
          hic! Possimus laboriosam omnis dignissimos assumenda quos a odit
          deleniti totam sequi ea, delectus odio minus culpa optio quod
          excepturi ducimus dolore explicabo vitae amet tempora, dolorum sit!
          Itaque eveniet sed beatae ullam tempora dolor repudiandae rem neque
          officiis, pariatur non voluptas, quisquam dignissimos! Explicabo
          deleniti iure velit. Esse, commodi nisi? Expedita asperiores sit odit
          neque minima saepe culpa delectus magnam corporis ut inventore
          adipisci natus, corrupti explicabo, odio, mollitia rerum nihil
          laudantium harum consectetur autem nesciunt incidunt. Aperiam odio
          debitis, hic nesciunt placeat necessitatibus ratione? Praesentium
          laborum ea recusandae eius soluta itaque ipsum inventore at minus
          voluptates quo assumenda, sit omnis sed aut hic, esse consectetur
          voluptatibus? Maiores autem at natus enim eum, voluptate odit, optio
          voluptates corrupti illum minima magni quis ex asperiores, aperiam
          modi dolorum praesentium consequatur fugit corporis? Recusandae
          similique doloremque facilis consequatur, alias nemo nostrum aperiam.
          Nemo eius nulla quibusdam atque officia voluptatum consectetur
          blanditiis magni officiis molestias totam, enim necessitatibus laborum
          provident nam beatae non! Molestiae quibusdam illum at molestias quam?
          Maiores similique eaque ducimus quo laborum pariatur inventore
          deserunt dolorem nihil adipisci? At error ipsam incidunt
          exercitationem illo ab quae id, quia accusantium ex repellendus
          expedita a esse dolorum alias aspernatur ad voluptatem nobis mollitia
          quo. Necessitatibus saepe tenetur temporibus deserunt facere cum
          eligendi veritatis dicta ea mollitia incidunt sunt perferendis dolore
          rem perspiciatis distinctio vitae aliquid nobis, maiores,
          exercitationem pariatur. Maxime tenetur repellendus omnis, saepe et
          dolorum ea adipisci harum ab odit vitae impedit sed reprehenderit
          aliquid odio sapiente iste eius explicabo enim ut quas unde
          consequatur. Neque quo cupiditate nihil omnis in veniam. Harum
          sapiente praesentium corporis cum facere non. Cumque rem esse, culpa
          officiis aliquam mollitia neque consequatur delectus tempora. Rem
          aliquid consequuntur molestiae veniam beatae, mollitia non ducimus
          impedit qui nostrum excepturi dolor facilis, fugit quae, debitis
          deleniti! Aspernatur fuga, tempore officia quae molestiae accusantium
          dolore! Nam neque odio sed eligendi! Modi reiciendis numquam sit fuga
          exercitationem sed aliquid cum eligendi, quae in aspernatur, atque
          eaque eos odit aliquam incidunt. Ut culpa nostrum nam impedit minus
          voluptatibus sint ratione ullam id voluptatem atque maiores
          perspiciatis eos, blanditiis fugit rem hic accusamus nulla
          exercitationem voluptas amet dolorum ea. Commodi ut sunt, cumque sint
          deleniti rerum necessitatibus vero in et harum quidem! Maiores tempore
          ullam sit quod magnam exercitationem, ea, delectus totam voluptates a
          excepturi quo, repellat minus recusandae ipsam. Sint minima fugit
          deserunt est quaerat saepe natus modi laboriosam beatae nostrum.
          Placeat, explicabo nemo suscipit repudiandae sequi perspiciatis
          dolore, dolorum aut, alias aliquid expedita? Officia, officiis
          quisquam eius ullam nisi dolorem delectus adipisci quae dicta ab
          voluptatem reiciendis repellendus esse maiores aliquid! Amet, error.
          Cupiditate distinctio magnam deserunt? Minus quaerat incidunt,
          suscipit modi itaque temporibus alias dicta assumenda officia tempore
          eum soluta quas mollitia molestiae cum iusto commodi ab veniam
          sapiente? Provident, nesciunt quis neque deserunt nemo, explicabo,
          fuga numquam unde quisquam sed odit inventore maxime magni. Nobis
          obcaecati nisi facilis commodi maxime beatae? Reiciendis ea non vitae
          totam voluptate, eveniet dolores aliquid veniam error ratione
          consequuntur saepe hic? Optio consequatur excepturi nobis, non iste
          delectus accusamus et modi tempore illum quos, cumque enim suscipit
          doloremque officiis earum placeat cum est deserunt dolorem ducimus!
          Aspernatur libero at voluptates repellat fuga enim maxime, tempore,
          minima, debitis hic impedit natus saepe labore explicabo voluptatibus.
          Nisi itaque commodi laboriosam dolor nemo, reprehenderit numquam
          distinctio cupiditate. Quaerat facilis quae sint excepturi dolor
          impedit inventore blanditiis? Error consequatur veritatis laudantium
          illo sed similique, impedit consequuntur minima consectetur. Facere
          voluptatem culpa quae obcaecati delectus optio, ab velit sit rem amet
          non ipsum? Laborum autem, ad aliquid soluta fugit repellat voluptas
          voluptates ipsam tenetur iste ex laboriosam quasi, officia ratione
          hic! Fugit veniam facere repudiandae nobis odit! Odit eveniet repellat
          id ex ullam, quis praesentium voluptatum repellendus reiciendis
          consectetur. Veniam exercitationem dolorum eius eaque corporis quod
          libero reiciendis nobis, sit pariatur delectus dicta. Facere quis
          earum quibusdam deleniti minima quas sapiente aperiam error qui,
          laudantium animi reiciendis corrupti odit libero quia molestias
          blanditiis tenetur exercitationem deserunt excepturi! Temporibus iure
          consequatur, dicta laboriosam tempore hic, pariatur porro doloribus
          distinctio quaerat, totam magni in nulla dolorum laudantium. Autem
          nemo quos, illum voluptate rerum ut, quas magni explicabo voluptatibus
          commodi voluptatem accusantium. Expedita soluta in fugit enim rerum
          officiis blanditiis. Impedit omnis est ducimus odio consectetur
          voluptatem distinctio delectus accusantium suscipit ex dignissimos
          necessitatibus sequi, sed nisi ipsum sunt veritatis ut esse id nobis,
          ullam unde cupiditate architecto voluptatum. In excepturi ipsum
          inventore quam eius quia tempore exercitationem deleniti odio totam
          perferendis officia assumenda est molestiae perspiciatis fugiat rerum
          a, quaerat vel possimus eaque laudantium itaque amet! Quasi
          praesentium fuga cum beatae consequuntur culpa cupiditate nobis quam
          atque quae? Ea labore necessitatibus dolor recusandae cum, placeat
          tenetur asperiores at deserunt dignissimos? Quia laudantium non
          eveniet ratione eum accusantium aliquid dolores debitis, reiciendis,
          ipsam doloribus dicta dignissimos velit. Libero accusamus placeat sed
          molestiae reprehenderit earum cum assumenda inventore ducimus magnam!
          Cum, at tenetur, asperiores iste et rem deserunt a dolor perferendis
          cumque assumenda dicta animi, alias quae omnis sapiente nam velit
          accusamus minima excepturi. Fuga exercitationem cupiditate magni
          maiores sit dolores quo sequi dolorum provident pariatur accusamus
          alias qui, minima maxime sed asperiores officia consequatur,
          voluptatibus laborum esse. Magni dignissimos voluptate voluptas quasi
          accusamus commodi iste voluptatem architecto voluptatum. Reiciendis
          molestias hic in aliquid. Odit, voluptatum voluptatibus. Officiis
          ducimus consequuntur odio eum quas ad, voluptas quibusdam dignissimos
          laboriosam officia, voluptatibus ea natus minima nobis quam dolorem
          consequatur qui vel beatae omnis quae? Natus nisi reiciendis quo
          pariatur explicabo autem voluptates ipsa? Sunt aperiam, eveniet eum,
          sapiente nisi atque quaerat error tempora deserunt voluptatem
          blanditiis. Tempore est nulla architecto voluptatum eum nesciunt nemo
          pariatur accusantium recusandae eligendi. Quo architecto repellat
          atque facere a enim nesciunt possimus placeat et eos sapiente omnis ab
          nam, delectus odio. Enim, molestias ad exercitationem consectetur
          laboriosam, consequuntur, obcaecati dolorem perferendis cum deserunt
          magnam vel excepturi. Laborum tenetur architecto reiciendis. Aliquam
          voluptatem dicta laborum illo vitae alias, consectetur pariatur
          molestiae amet repudiandae, distinctio minus veniam rem
          necessitatibus. Molestiae soluta similique cumque, dolore dolorum
          sapiente beatae quae explicabo laboriosam quam enim. Consequatur,
          reiciendis eaque? Quidem qui facere corrupti rerum tempore repellat
          obcaecati, velit placeat possimus cumque fugiat accusantium incidunt
          voluptate laudantium. Quia, earum quaerat, commodi quidem dolor
          incidunt id eos magnam porro quisquam facere. Corrupti ab illum totam
          itaque architecto, ipsum dolorum esse ad cupiditate non molestiae?
          Numquam fuga tempore laudantium ducimus, minima dicta doloribus
          facilis recusandae consectetur pariatur quis placeat vero amet.
          Voluptatum rerum nihil fuga autem natus at, id quos cupiditate iste
          quia! Inventore modi vel quaerat optio quod unde eligendi maiores,
          ipsam error quam sint ducimus corrupti nobis, nihil sapiente facere
          iusto. Reprehenderit numquam amet nemo impedit iste quasi facilis
          dignissimos, labore recusandae deserunt obcaecati porro distinctio
          consequuntur saepe adipisci quas rem. Similique consectetur id
          voluptatem velit, aliquid beatae omnis nulla eaque dicta et temporibus
          sint odit ad autem maxime eveniet corporis optio rerum sequi? Sapiente
          eaque nisi unde. Repudiandae voluptatem modi nulla necessitatibus
          soluta, reprehenderit expedita repellendus nesciunt consequuntur
          beatae laborum minus quibusdam similique? Explicabo temporibus odit
          error distinctio quasi! Sequi nam ipsum quibusdam ex quas et sed nobis
          iste iusto ab doloremque blanditiis inventore est reiciendis, repellat
          quia dolore dolor exercitationem alias tempora distinctio cumque
          dolorem modi sint! Adipisci explicabo quam dolorem facilis nihil
          suscipit temporibus magnam porro natus perferendis pariatur,
          accusantium fugiat nemo iure minus consequuntur rem vel quibusdam
          tempore omnis dolores beatae nostrum ipsa. Doloribus cupiditate totam,
          nihil optio expedita modi enim facilis consequatur labore accusantium
          culpa, maiores cumque corporis iure aspernatur dolores qui, aperiam
          quia impedit facere sapiente. Corporis asperiores minus voluptatem
          pariatur amet tempore doloribus dignissimos earum, dolores voluptatum
          aspernatur officia optio delectus enim eos iure quae aperiam impedit!
          Nihil tempora animi, ratione eos quibusdam adipisci at nemo distinctio
          saepe asperiores consequuntur. Similique ullam vitae deleniti sed
          quidem illum cumque magnam nam provident quam neque, necessitatibus,
          unde vero voluptatibus esse natus nobis, facilis consequatur accusamus
          dolores ab voluptates. Neque velit asperiores cum at repellat
          repudiandae ullam, placeat tempore? Id ex repellat esse ratione nam
          aperiam molestiae magnam, expedita minima recusandae dignissimos.
          Magni voluptas omnis maxime voluptatem quidem fuga blanditiis commodi!
          Perspiciatis dolores a temporibus mollitia nisi aliquam hic maxime
          accusantium fugiat sapiente id consequatur quis dolore minus modi
          placeat, ipsam porro ut deleniti consequuntur officiis praesentium
          corporis. Harum, blanditiis at consequuntur autem veniam rem odit
          totam voluptatum nobis suscipit architecto dignissimos amet ratione
          repudiandae quo laboriosam nam fugiat. Labore nulla ratione
          repellendus aut atque. Dolores, possimus distinctio? Placeat ipsum
          repellendus reiciendis praesentium repudiandae ullam, suscipit quaerat
          odit veritatis tenetur culpa mollitia error ipsam, obcaecati
          exercitationem incidunt in eius odio omnis velit eaque, vitae
          doloribus debitis fugiat. Cupiditate unde consectetur nostrum eum
          earum fuga perferendis a quas cumque error doloremque praesentium
          aspernatur, explicabo cum voluptatum amet natus molestias ipsam harum
          ab non? Nesciunt autem ipsum ab animi, blanditiis impedit provident
          exercitationem eaque a error esse facere deserunt iusto labore hic
          accusamus, ipsa illum reprehenderit, aspernatur quo voluptates tempore
          fugit. Doloribus, maiores, ab, consequuntur sapiente veniam velit ad
          repellendus mollitia architecto labore esse blanditiis reiciendis
          iusto minus ut. Inventore explicabo quia assumenda, soluta corrupti
          aliquid. Quam, dicta cum vitae totam ex cupiditate doloribus delectus
          possimus, optio reiciendis eos rem sapiente voluptatum. Id odit illum
          sequi quibusdam laborum animi labore vitae ab fuga qui quis mollitia
          eveniet perspiciatis repellat eligendi asperiores non, autem
          doloremque iusto expedita facilis velit unde? Minima ad rem nostrum
          adipisci quae hic sunt enim optio, labore dignissimos cum facilis
          maxime praesentium error mollitia expedita dolore placeat ipsam
          molestias vero, numquam obcaecati nesciunt blanditiis voluptas.
          Molestias labore unde illo eaque, earum eum maxime neque accusamus
          ipsum eos aliquid at adipisci commodi ipsa, mollitia minima vel? Illo
          sapiente beatae magni, ipsam quis amet consequuntur ex tempore,
          debitis omnis esse et deleniti placeat delectus sequi! Natus officiis
          ut necessitatibus minima placeat qui blanditiis dolores commodi
          voluptate distinctio veritatis ipsam suscipit aperiam itaque, aliquam
          cum minus quaerat architecto voluptatem porro facere. Quis sit
          nesciunt laborum libero dolores exercitationem veniam recusandae,
          quasi tempora unde consequuntur autem doloremque nisi molestiae omnis,
          minus optio dignissimos aspernatur harum iure voluptate, quam facere.
          Nostrum sapiente sequi possimus quidem distinctio repellendus ad iure
          non. Tempora voluptatibus veritatis, sed molestias vero nostrum.
          Numquam unde quasi eos, cupiditate eius enim rerum beatae est non
          praesentium a accusamus minus sunt at blanditiis reprehenderit. Eum
          deserunt veniam blanditiis quibusdam quas. Eos, natus! A velit
          voluptatem ea, maxime iusto, asperiores sequi consequatur illo aliquid
          dolorum optio cum dignissimos, culpa sed enim voluptate minima
          sapiente repudiandae sunt soluta tenetur ducimus deleniti animi illum!
          Non animi exercitationem recusandae! Maiores, aliquid ipsum? Odio
          dicta excepturi eum molestiae ab, sequi rem quidem itaque pariatur,
          accusantium veritatis ea sit fugit consequuntur incidunt quibusdam.
          Accusantium, nemo at, ipsam veritatis natus, accusamus minus facere
          nesciunt veniam quo repellat tenetur fugit harum eveniet aperiam optio
          deleniti culpa suscipit! Quis consequuntur corporis minima soluta
          culpa non placeat labore quos! Ab dignissimos dolorum velit ipsam
          fugit optio eaque quia exercitationem tenetur odio totam a temporibus
          alias distinctio atque officia, facere nostrum inventore tempora cum
          minima veniam repellat, voluptatibus consectetur! Corporis expedita
          magni quod alias mollitia maiores doloribus? Quos expedita est
          eligendi animi maiores vero, consequuntur accusantium inventore
          perferendis porro odit voluptatibus sunt accusamus saepe alias maxime
          dolor aliquam fuga repellat quas similique! Doloribus voluptatibus id
          fugit? Delectus quaerat iusto totam nisi numquam aliquid at fugiat non
          ipsa. Deleniti enim facere nisi eius quia explicabo? Voluptates
          cupiditate repudiandae quam dolorem officia nihil ad eveniet molestiae
          corrupti consequatur inventore eligendi, ducimus hic necessitatibus
          tenetur est voluptas ipsam eum soluta neque nam quibusdam tempore
          veniam. Non, neque tempora laboriosam harum quisquam accusamus a
          perspiciatis possimus consequatur fugit itaque. Ducimus, quis? Tempora
          nihil fugit magni enim, rerum explicabo ipsa necessitatibus, est,
          consectetur cupiditate similique asperiores. Quos id possimus
          repudiandae perferendis asperiores animi iure et fugiat commodi iste
          quibusdam neque vitae error doloribus, facilis reprehenderit quisquam
          omnis perspiciatis hic quo, impedit quas? Quod corporis vero esse
          fugiat officiis incidunt dolorum quam cum odio laudantium! Eius
          repudiandae, totam minus earum possimus animi placeat distinctio,
          beatae consectetur expedita obcaecati magnam rerum! Ducimus vitae rem
          odio architecto ex est expedita eos ab, in dolorem nobis suscipit
          minima laboriosam? Officiis sapiente sint laborum perferendis iure ab
          officia cum itaque laudantium doloremque nemo doloribus numquam
          molestiae voluptatum quam, tempore quidem consequuntur consequatur,
          accusamus quod necessitatibus aliquid modi cupiditate. Ipsum non harum
          voluptatem labore rerum, nisi nobis repellat neque omnis quibusdam.
          Doloremque optio ab ducimus ipsa modi quod facere a voluptatibus unde
          laudantium, nisi accusamus ex, porro praesentium. Culpa illum
          quibusdam odio neque laudantium, quasi provident porro, ad modi at
          cumque molestiae repudiandae. Unde consequuntur iste ipsum officia?
          Praesentium, atque magnam sit accusamus deserunt vero maiores placeat
          aut corporis! Vitae est enim atque maxime eaque consectetur voluptates
          aliquid ratione quis similique, expedita odit sequi voluptatibus cum
          placeat provident dolore non nulla! Omnis distinctio quam at similique
          molestias eaque corrupti veniam, deserunt nihil explicabo, odit labore
          iure quod, aliquid tempora sunt id earum laborum soluta. Doloribus
          quod obcaecati dicta voluptatum eaque, sequi molestiae ipsam sapiente
          ducimus et saepe eveniet quasi enim quaerat, minus vitae quam. In iure
          qui at tenetur labore molestias assumenda ad tempora veniam officiis
          ipsam molestiae autem dolore velit ratione dolorem, maxime quasi aut
          illo officia voluptatibus neque nemo iusto? Amet earum ex sapiente
          iusto blanditiis aperiam eum. Obcaecati, perspiciatis eligendi amet
          quo culpa repellat neque, vel eos placeat sequi accusamus
          exercitationem, porro tempore sapiente aspernatur reprehenderit fugiat
          labore laborum quasi commodi at nam nobis ipsam! Nam, eius asperiores
          nihil dolor expedita repudiandae fuga! Pariatur aperiam esse inventore
          ratione nam nobis nesciunt laborum non at ullam? Accusamus
          dignissimos, a saepe quisquam veniam atque. Repellat, atque id
          nesciunt cumque sapiente expedita incidunt recusandae aut, amet nobis
          facilis, ab quibusdam soluta dignissimos. Dolore nobis, nam
          praesentium quo odit impedit enim adipisci alias voluptate in deserunt
          modi aspernatur qui asperiores voluptas sunt mollitia omnis iusto rem.
          Adipisci at quas dolorem laudantium corrupti qui, beatae recusandae in
          eligendi magni deserunt, repudiandae non autem explicabo sint minus
          aliquam cumque. Perspiciatis non, ullam commodi excepturi voluptates
          illum porro perferendis recusandae quidem, minus alias accusamus eos
          minima. Voluptatibus repudiandae corrupti reprehenderit aperiam
          inventore porro commodi tenetur sequi quidem id. Ad mollitia
          distinctio recusandae placeat doloremque quod, aliquid facere eligendi
          dolore neque! Doloremque nulla perspiciatis laboriosam quas nobis,
          cumque dolor tempora, corporis voluptatem suscipit recusandae porro
          quia aliquam mollitia debitis soluta sequi minima. Ea porro temporibus
          corrupti neque aut voluptatibus atque dolore eligendi facilis vitae.
          Ullam, pariatur amet ratione nulla rem doloremque repellat distinctio
          temporibus repudiandae exercitationem consequuntur adipisci sit minus
          quis odit ad accusamus aliquam minima nesciunt ex facere illo esse!
          Vero fuga sit ut? Magni nam sint mollitia exercitationem blanditiis
          tenetur aliquid, illo similique nulla delectus distinctio culpa labore
          iste quidem in qui vitae illum reprehenderit! Laboriosam, ullam
          officia! Dicta minima natus, est recusandae accusantium earum facere
          veritatis quo beatae voluptate consequuntur quia, reprehenderit
          commodi deleniti soluta quae assumenda? Velit ut autem quibusdam
          minima harum porro repellendus adipisci mollitia unde quis asperiores
          eveniet, exercitationem hic nam officia voluptate esse eius quam
          quisquam qui ea vel voluptas quaerat a. Eius doloribus itaque maiores
          eaque! Omnis dicta a ipsa esse cumque et consequuntur tempora quia
          eius architecto. Ab in pariatur dignissimos eligendi suscipit rerum,
          expedita reprehenderit consequatur omnis alias eum est ullam
          necessitatibus adipisci voluptatem. Optio distinctio adipisci vero
          dolor quaerat! Tempora expedita ut deserunt sapiente iure animi quis
          illum accusamus, vero impedit! Porro, beatae. Enim, harum ullam
          facilis doloremque aut dignissimos fugit tenetur architecto quae
          cupiditate amet voluptatibus molestias error, nostrum repudiandae
          ipsum praesentium numquam quo quidem id hic recusandae porro qui
          nihil? Eveniet, id facilis? Suscipit minima sapiente repudiandae vel
          ad vitae at in recusandae veritatis ab temporibus eligendi blanditiis
          placeat porro, delectus expedita voluptates odio consectetur, voluptas
          ipsum, repellendus labore. Sint ducimus dolores neque, odit excepturi
          fuga tempora hic veritatis quia beatae quis tempore nostrum, dolorum
          aperiam! Voluptate ipsa fugiat fugit quos dolorem dolor quibusdam
          minima tempore expedita iste reiciendis facilis incidunt dolorum
          aperiam aliquam exercitationem distinctio molestiae, ullam quod ea
          quasi aut quo magni corrupti? Placeat amet quidem consequatur dicta!
          Laborum dolorem necessitatibus beatae fugit sit fugiat, quibusdam
          doloremque voluptates perferendis laudantium temporibus quam ipsa est
          maiores illo cum magni tempore sint! Unde deserunt in quisquam impedit
          ipsum voluptatibus ipsa, explicabo eos id laborum architecto ex odio
          necessitatibus officia alias nam error commodi! Consequatur sit
          accusantium sint, saepe consectetur itaque aperiam fugiat voluptate
          laborum laudantium similique magnam velit, ad dolore dignissimos ullam
          enim eveniet quibusdam, maxime sequi doloremque dicta necessitatibus
          ducimus. Itaque repellat amet placeat ea porro provident dicta, autem
          libero, magnam est id fugit quas adipisci fugiat recusandae vel quia
          totam cumque repudiandae praesentium! Ullam, exercitationem iste eos
          dolorum vero rerum modi expedita explicabo aliquid autem, provident
          est atque cumque. Beatae assumenda culpa vel voluptatem debitis. Dolor
          minima amet vel veniam nobis ipsum cum quae consequuntur quisquam
          quibusdam atque repudiandae reprehenderit ut tempore voluptas mollitia
          et, sapiente nesciunt. Expedita repellat quaerat quis impedit
          perferendis quos natus ex distinctio, nam dolores tempore voluptas rem
          eius, non ipsa placeat neque. Commodi unde quisquam itaque! Quos
          possimus voluptatibus, ipsa quis, nostrum dolores saepe sit voluptatem
          animi numquam quo magni consequuntur optio alias autem asperiores
          sint, molestias atque dolor. Sit numquam quas expedita adipisci ipsa,
          ducimus iste beatae tempora neque obcaecati et accusamus optio sequi,
          autem sed ipsam eos dolorum recusandae. Dolores, dignissimos quia
          pariatur aspernatur quisquam natus magnam dicta vel enim reprehenderit
          soluta nulla sunt earum ratione officia illo! Laboriosam eum corporis
          deserunt porro libero ipsum modi nemo. At cum ex dolorem, qui
          provident officiis obcaecati consectetur saepe unde dolores
          praesentium nostrum? Odit repellat sunt ea obcaecati dolores
          praesentium officiis libero autem, harum repudiandae deleniti rerum
          excepturi voluptate qui, natus architecto deserunt eligendi similique
          labore non consequatur dicta sit voluptatum dolor? Facilis adipisci
          nihil, ducimus nulla necessitatibus non esse dolorum voluptas
          laboriosam hic rem. Blanditiis, totam nostrum, voluptates itaque cum
          ab vero est rerum animi cumque fugit labore quam corporis alias nulla.
          Placeat totam assumenda odit ratione, culpa ea, nostrum in quas
          cupiditate, recusandae magnam ad minus officiis dolores exercitationem
          alias omnis. Nostrum aspernatur quasi adipisci pariatur dignissimos
          nam culpa minima ducimus. Reiciendis iusto animi, quod laboriosam
          nostrum laborum praesentium pariatur doloribus sunt quaerat cupiditate
          quibusdam at laudantium sequi temporibus, omnis sapiente autem
          consequatur ad dolor sint. Nam asperiores voluptatibus distinctio ipsa
          odio earum accusantium, repudiandae placeat eveniet similique cum
          inventore, minus aperiam sed rerum laudantium odit fugiat praesentium,
          rem omnis! Saepe, adipisci a. Ducimus corporis, nisi consequatur est
          molestias quis, quibusdam ad sunt deserunt minus error cupiditate
          voluptas illo commodi necessitatibus maxime quod nemo suscipit enim
          numquam tenetur temporibus perspiciatis ex at. Iste error dolore atque
          voluptates aspernatur eum ipsa nemo explicabo alias nobis, pariatur
          sapiente velit! Dolorum, aut. Quis, magnam, natus ab perferendis
          explicabo quam similique nulla pariatur aliquam quia at libero ducimus
          fuga accusantium cum? Aut vero quidem distinctio labore harum voluptas
          aspernatur totam nam doloremque voluptates? Rem quas repellendus vel
          omnis tenetur eaque cumque dignissimos! Modi veniam consequuntur
          omnis, voluptates odio aperiam, expedita hic qui autem, eos doloribus
          voluptate beatae maiores id odit eveniet optio unde labore quaerat
          assumenda cumque molestiae animi aspernatur! Dolorum ea minus totam
          deleniti porro illo enim vel sed recusandae repellendus non iste
          incidunt ratione rerum, deserunt ipsum repellat magni eius fuga omnis
          sapiente officia. Vero necessitatibus debitis blanditiis, eveniet nisi
          asperiores tenetur labore enim! Perspiciatis similique neque mollitia,
          rerum impedit dicta, illo earum, atque dolore debitis repellat eveniet
          iusto veniam quia eum distinctio. Voluptate expedita dolorum nisi
          officia quae animi provident accusantium illo, repellat in
          necessitatibus pariatur vel exercitationem suscipit inventore! Magnam
          iste porro blanditiis repellendus fugiat corrupti esse sit dolorem
          accusantium, ut voluptatibus rem eos, nihil labore veniam ipsa nam
          soluta? Labore quasi quidem iure sed cupiditate nostrum officia
          maiores, nemo quo sequi natus aspernatur, fuga, possimus voluptatibus.
          Voluptatum, tenetur ad sapiente impedit excepturi nesciunt, placeat
          modi illo cumque itaque soluta quisquam quis, aperiam aliquid debitis
          dolores nemo doloremque dicta adipisci eum asperiores dolorum quas
          pariatur nobis. Nesciunt soluta qui alias, dolorum accusantium sint,
          est aut dolor sit suscipit saepe tenetur magnam aliquam corporis porro
          ut, quidem cum modi? Inventore quasi deleniti placeat cumque assumenda
          aliquam perspiciatis esse repellendus expedita! Soluta culpa, voluptas
          inventore est reiciendis quia non natus hic provident animi laudantium
          unde quaerat, dignissimos consequuntur eius nostrum. Excepturi
          accusantium, dignissimos rem vel alias enim illum? Debitis et
          provident, doloribus minima mollitia excepturi perspiciatis, labore
          magni impedit suscipit beatae laborum soluta totam placeat fugiat
          nesciunt dolores obcaecati nobis cupiditate sunt enim aut repellendus
          voluptatem quia. Quam ipsam ea voluptatum. Animi, ex nemo impedit
          architecto a dolore et laborum quia voluptatum odit vero? Sapiente
          molestias quis nobis eius in distinctio animi cupiditate voluptatibus
          harum ad velit commodi impedit, quibusdam non dolorum doloremque illo
          exercitationem quod doloribus praesentium facilis? Voluptas
          perspiciatis dignissimos deleniti omnis, sit natus dolor unde
          reprehenderit tempore ducimus ipsa, saepe, voluptates quam? Ad
          quisquam aliquid, fugit et cupiditate veniam. Officiis culpa quia
          laborum amet! Numquam ullam quam inventore corrupti aspernatur magnam
          voluptatum quaerat, architecto ipsa sed quibusdam necessitatibus
          saepe. In optio sapiente necessitatibus perferendis eum rem quibusdam,
          incidunt dignissimos eius veritatis similique? Saepe, error sapiente!
          Fugit quisquam cupiditate quod, repellat consequatur quo, omnis
          exercitationem iure quasi ipsa modi adipisci aliquid maiores
          perspiciatis voluptatem corporis nostrum. Fuga necessitatibus aliquid
          dolorem vitae non voluptas aperiam tempora velit quas corporis porro
          placeat, et labore similique laudantium quam repudiandae veritatis
          unde provident officia tempore. Sed odio aspernatur, expedita
          dignissimos veritatis magnam quisquam, eum officiis ipsam iste beatae?
          Ducimus ipsa maiores quos molestias omnis totam libero, iste,
          veritatis excepturi id doloribus doloremque facilis odit a ipsam
          aspernatur vitae quasi quod soluta architecto laboriosam consequuntur
          ab voluptatibus. Doloremque atque nesciunt quibusdam omnis, qui
          laborum recusandae, sed a reprehenderit voluptatibus debitis molestias
          itaque, explicabo temporibus! Nulla a repellendus illo exercitationem
          asperiores dignissimos ullam at quod, iure expedita dolorem
          perferendis nam cumque, voluptates illum eligendi, facilis voluptate
          iste tenetur sint. Officia delectus iusto vero veritatis voluptas
          accusantium quo magnam sapiente. A cupiditate eius adipisci nisi
          recusandae ab ipsa placeat sed dolores aut? Praesentium odit mollitia
          deleniti, illo error totam minima exercitationem quo. Fugit, facere
          repellendus unde possimus reiciendis hic cupiditate deleniti harum
          similique, rem nam neque sequi ipsam praesentium quae debitis modi!
          Aperiam totam possimus repudiandae delectus maiores commodi soluta
          dolorum optio ex atque, necessitatibus officiis similique minus
          voluptatem at nihil! Commodi quibusdam fugiat non nesciunt suscipit
          vero maiores, iusto beatae earum qui totam saepe ullam. Voluptatibus
          quisquam, praesentium saepe sit porro nemo nulla, aliquam eos veniam
          excepturi labore molestias quaerat accusantium. Quaerat quidem
          voluptate inventore dicta nostrum, accusamus quae beatae autem libero
          sequi quisquam est repellendus eligendi atque! Similique eaque vel
          laudantium inventore atque iure asperiores autem tempora doloribus
          rerum quae magnam delectus consequuntur qui earum veritatis dolore, ab
          voluptates! Quis officiis iusto consequatur dolorum commodi nulla
          illum amet perferendis eum. Culpa dignissimos eius ad assumenda. Quis,
          voluptates! Tempore, ut facere obcaecati repudiandae fugiat laudantium
          numquam rem sed? Quas asperiores molestias similique quis reiciendis
          harum excepturi quos dolor aspernatur exercitationem odit nulla
          molestiae adipisci perferendis nostrum et, minus possimus culpa! Quis,
          nesciunt. Dolorem, porro soluta, sapiente temporibus quibusdam
          voluptatibus distinctio cumque, eum eveniet dolor ab nesciunt omnis
          perspiciatis? Aliquid, consequatur ipsam eligendi minima reprehenderit
          vero enim reiciendis blanditiis sunt, repellendus excepturi quod quis
          animi illum architecto quam dolorum laborum adipisci! Eos totam
          explicabo optio quod officia dolorem architecto labore facere minima
          ut et non amet aliquam, dolorum iusto animi delectus, tempore odit
          quos suscipit nam recusandae atque commodi. Beatae, commodi itaque
          animi doloribus id eaque cupiditate ipsam optio, autem facere
          asperiores laboriosam alias non voluptatibus? Id voluptas quia quas
          debitis, voluptatem eius saepe distinctio temporibus nesciunt fugiat
          rem perferendis reiciendis consequatur ducimus eveniet nihil cum
          suscipit ut. Architecto alias labore ratione quae repellat libero
          optio, recusandae odit, magni incidunt, dolore id sint unde veniam
          quasi omnis animi iusto. Atque quidem delectus sequi incidunt hic! Nam
          temporibus atque distinctio repellat veniam, fuga optio suscipit
          pariatur quasi culpa? Dolores a corporis cupiditate voluptas sequi
          tempora, dolor saepe harum ipsa velit fuga eligendi praesentium, esse
          eaque repellat doloremque facere vel ratione aliquid cumque error
          accusantium. Iste aliquid maxime consectetur quam dolore a, deleniti
          dolores hic cum blanditiis placeat quisquam minima rerum debitis sint
          labore earum, quos quo velit magni quasi porro. Similique accusantium
          quo error, harum numquam vitae aliquam sit cumque nostrum
          reprehenderit autem necessitatibus soluta sapiente omnis nihil, beatae
          ipsum est culpa cum incidunt placeat? In quibusdam odit nam ullam vel
          exercitationem repellat error non amet! Officiis obcaecati alias
          possimus illo sunt vel corporis temporibus pariatur quam numquam
          sapiente sint ducimus perferendis rerum consequuntur veritatis aut
          dolores libero, distinctio, delectus praesentium labore. Autem
          voluptatibus neque, itaque cum sint ad illo. Laboriosam non ipsam
          magnam animi sint quaerat iste ut nostrum aspernatur necessitatibus
          dolorum, quidem molestias, omnis fugiat.
        </p>
      </motion.div>
    </>
  );
};

export default FadeInText;
