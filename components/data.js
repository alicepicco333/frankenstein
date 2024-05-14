

import benefitOneImg from "../public/img/mary_shelley_an_idealised_port.jpg";
import benefitTwoImg from "../public/img/Immagine1111.png";

const benefitOne = {
  image: benefitOneImg,
  
  bullets: [
    {
      title: "England's First Family of Writers",
      desc: "Mary Wollstonecraft, William Godwin, Mary Wollstonecraft Godwin Shelley, and Percy Bysshe Shelley collectively form England’s first family of writers. Of particular note is Mary Shelley's Frankenstein, or the Modern Prometheus, published in 1818, which profoundly influenced Western literature over the years.",
    
    },
    {
      title: "The Infrastructure",
      desc: "The technological infrastructure of the Shelley-Godwin Archive is built on linked data principles and adheres to emerging standards such as the Shared Canvas data model and the Text Encoding Initiative (TEI). These frameworks support a participatory platform where scholars, students, and the public can engage in the curation and annotation of the archive's contents. Additionally, the archive's transcriptions and associated software applications are openly available on GitHub under open licenses.",
     
    },
    {
      title: "Our Project",
      desc: "Our project fits well in the context of the Shelley-Godwin Archive because it aims to speed up the process of adding new material to the archive. While we're initially concentrating on transcribing Mary Shelley's works, our models could easily be adjusted to transcribe texts from other authors featured in the archive. This flexibility could improve significantly yo the archive's expansion and accessibility.",
   
    },
  ],
};

const benefitTwo = {
  title: "Workflow",
  desc: "As mentioned in the section above, in order to develop our models we had to select the works in the archive that were written exclusively by Mary Shelley. Therefore our overall documents set ended up consisting of 36 pages of Frankenstein (more specifically the chapters 5,6 and 7) and 28 pages of Mathilda, Shelley’s second novel. Out of these 64 pages, a percentage of 10% of them was randomly selected by Transkribus as part of the validation set before the training to assess the model performance.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "According to guidelines...",
      desc: "The number of pages was set based on what is specified in the Transkribus guidelines (it’s recommended to have at least 10k words to train a HTR model)."
      
    },
    {
      title: "Using Universal Lines",
      desc: "After the selection process, we leveraged the pre-trained public model available on Transkribus (the Universal Lines model) for the setting of the layout. ",
      
    },
    {
      title: "Relying on the Original Archive",
      desc: "Regarding the textual part, we relied on the transcription provided by the archive, considering it a reliable ground truth.",
      
    },
  ],
};


export {benefitOne, benefitTwo};
