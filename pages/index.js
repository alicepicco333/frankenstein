import Head from "next/head";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";

const Home = () => {
  return (
    <>
      <Head>
        <title>Frankenstein or the modern Prometheus</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Hero />
      
      <SectionTitle
        pretitle="Introduction"
        title="What is the research question?">
        The primary objective of our project is to develop a model capable of automatically transcribing the handwritten texts of Mary Shelley with a reasonably low error rate. We have utilized the online platform Transkribus for training two distinct models, using approximately 70 pages (around 10000 words) from Shelley’s renowned novels, Frankenstein and Mathilda.
      </SectionTitle>
      
      <SectionTitle
        pretitle="The context"
        title="The Shelley-Godwin Archive">
        The Shelley-Godwin Archive is a digital repository that provides access to the digitized manuscripts of prominent literary figures such as Percy Bysshe Shelley, Mary Wollstonecraft Shelley, William Godwin, and Mary Wollstonecraft.<br /><br />It serves as a platform to collect, for the first time online, the dispersed handwritten legacy of this family of writers. Through partnerships between institutions like the New York Public Library, the Maryland Institute for Technology in the Humanities, Oxford’s Bodleian Library, the Huntington Library, the British Library, the Houghton Library, and the Victoria and Albert Museum, the archive contains over 90% of all known relevant manuscripts.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      
      <SectionTitle
        pretitle="The Training Process"
        title="Training the models with Transkribus">
        In the subsequent phase following transcription, our project shifted focus to <mark style={{ backgroundColor: "green", color: "white" }}>model training</mark>. We devised two private models: one fine-tuned using an existing model (specifically, the English model M4), and the other without any pre-existing tuning. The latter approach allowed us to systematically assess potential disparities and inconsistencies. <br /><br />The main parameters we focused on were the batch size and the number of epochs: we opted for a small batch size number (10) in order to avoid overfitting and improving the computational efficiency; regarding the number of epochs, we opted for the default setting (100) because we thought it was an appropriate number for data processing and evaluation since the dataset is not large.<br /><br />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <img src="/img/Immagine3.jpg" alt="image of model training with Transkribus" />
          <p>HTR MaryModel <br />(with base model)</p>
          <img src="/img/Immagine4.jpg" alt="image of model training with Transkribus" />
          <p>HTR MaryModel<br />(no base model)</p>
        </div>
        <p>The graphs showcase the learning curves of both the training and validation sets, which represent how much the Character Error Rate is diminishing over the epochs. Generally speaking if CER is over 10% the transcriptions are not so accurate because a lot of manual corrections are needed. In our case, both models performed quite well, even though it’s pretty clear that the one without fine-tuning has a higher CER percentage both on the training set and the validation set.</p>
      </SectionTitle>

      <SectionTitle
        pretitle="Testing"
        title="Testing the model on an unseen page of Mathilda">
        <div>
          <p>The last step of the project was to check the functionality of the model by testing it on an unseen page written by Mary Shelley. We chose to do it on a page taken from Mathilda that wasn’t included in the initial dataset.</p>
          <img src="/img/Immagine5.png" alt="A screenshot of our testing process" />
          <p>Test HTR MaryModel with base model (from “Mathilda”, pag. 101)</p>
          <img src="/img/Immagine6.png" alt="A screenshot of our testing process" />
          <p>Test HTR MaryModel without base model (from “Mathilda”, pag. 101)</p>
        </div>
      </SectionTitle>
      
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fulfill your needs">
        This section is to highlight a promo or demo video of your product. Analysts say a landing page with video has 3% more conversion rate. So, don't forget to add one. Just like this.
      </SectionTitle>
      
      <Video />
      
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonials are a great way to increase brand trust and awareness. Use this section to highlight your popular customers.
      </SectionTitle>
      
      <Testimonials />
      
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers' possible questions here; it will increase the conversion rate as well as support or chat requests.
      </SectionTitle>
      
      <Faq />
      
      <Cta />
      
      <Footer />
    </>
  );
}

export default Home;
