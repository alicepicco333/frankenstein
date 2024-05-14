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
        In the subsequent phase following transcription, our project shifted focus to <mark style={{ backgroundColor: "green", color: "white" }}>model training.</mark> We devised two private models: one fine-tuned using an existing model (specifically, the English model M4), and the other without any pre-existing tuning. The latter approach allowed us to systematically assess potential disparities and inconsistencies. <br /><br />The main parameters we focused on were the batch size and the number of epochs: we opted for a small batch size number (10) in order to avoid overfitting and improving the computational efficiency; regarding the number of epochs, we opted for the default setting (100) because we thought it was an appropriate number for data processing and evaluation since the dataset is not large.<br /><br />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <img src="/img/Immagine3.jpg" alt="image of model training with Transkribus" />
          <p>HTR MaryModel <br />(with base model)</p>
          <img src="/img/Immagine4.jpg" alt="image of model training with Transkribus" />
          <p>HTR MaryModel<br />(no base model)</p>
        </div>
        <p><br></br>The graphs showcase the learning curves of both the training and validation sets, which represent how much the Character Error Rate is diminishing over the epochs. Generally speaking if CER is over 10% the transcriptions are not so accurate because a lot of manual corrections are needed. In our case, both models performed quite well, even though it’s pretty clear that the one without fine-tuning has a higher CER percentage both on the training set and the validation set.</p>
      </SectionTitle>

      <SectionTitle
        pretitle="Testing"
        title="Testing the model on an unseen page of Mathilda">
        <div>
          <p class="mb-4">The last step of the project was to check the functionality of the model by testing it on an unseen page written by Mary Shelley. We chose to do it on a page taken from Mathilda that wasn’t included in the initial dataset.</p>
          <img src="/img/Immagine5.png" alt="A screenshot of our testing process" />
          <p class="mt-4 mb-9">Test HTR MaryModel with base model (from “Mathilda”, pag. 101)</p>
          <img src="/img/Immagine6.png" alt="A screenshot of our testing process" />
          <p class="mt-4 mb-4">Test HTR MaryModel without base model (from “Mathilda”, pag. 101)</p>
        </div>
      </SectionTitle>

      <SectionTitle
        pretitle="Fine-tuning or not?"
        title="With Base Model vs. Without Base Model">

        <p class="mb-4">The results of the test are clearly more efficient and reliable in the case of the model that was fine-tuned. This test is completely in line with what was discussed in the previous paragraph.</p>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
        <img src="img/immagine9.png" alt="Text Versions Comparison between the ground truth and the prediction of MaryModel with base model"></img>
        <img src="img/immagine10.png" alt="Text Versions Comparison between the ground truth and the prediction of MaryModel without base model"></img>
        </div>
        <p class="mt-4 mb-9">Text Versions Comparison between the ground truth and the prediction of Mary Model with base model (on the left) and without base model (on the right)</p>
        
        <img src="img/immagine11.png" alt="CER/WER percentages of the comparison between the ground truth and the prediction of Mary Model with base model"></img>
        <br></br><br></br>
        <img src="img/immagine12.png" alt="CER/WER percentages of the comparison between the ground truth and the prediction of Mary Model without base model"></img>
        <p class="mt-4">CER/WER percentages of the comparison between the ground truth and the prediction of Mary Model with base model (above) and without base model (below)</p>

      </SectionTitle>

      <SectionTitle
      pretitle="Issues"
        title="Issues Encountered">
      <p>One issue we wanted to focus on is the fact that our model was not well-trained for the layout recognition: in fact the last few lines in the Text Version Comparison refer to the numbers of a ruler that was present in the image but was not supposed to be taken into consideration in the transcription. <br></br>Of course we are aware of the fact that this issue could be solved at the beginning by cropping the image, so it’s something we’ll consider as a possible future development of the project.  </p>
      </SectionTitle>

      <SectionTitle
      pretitle="final remarks"
        title="Conclusions and Critics">
        <p>In conclusion, we are satisfied with the results obtained, and we believe that these models could serve as a useful starting point for future automation of the transcription and digitization process for the texts in the Shelley-Godwin archive. <br></br><br></br> However, we want to highlight some critical issues encountered during the project. After completing the transcription process, we trained the model on Transkribus and had to wait three days for our request to be processed by the platform’s server. Due to previous unsuccessful attempts, we didn’t have time to recalibrate the model and make it more efficient. In our opinion, this limitation makes Transkribus less reliable in its open-access version.</p>
      </SectionTitle>
      
      <SectionTitle
        pretitle="Watch the video"
        title="Have a look at Transkribus' UI and features">
      </SectionTitle>
      
      <Video />
      
      <SectionTitle
        pretitle="The team"
        title="Here's the team and our Personal Remarks">
      </SectionTitle>
      
      <Testimonials />
      
   
      
      <Footer />
    </>
  );
}

export default Home;
