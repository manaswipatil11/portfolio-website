import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Deep Speaker",
    description: "This project implements a speaker recognition system using MFCC features and a deep learning model (LSTM/CNN-based).",
    imageUrl: "https://smj97.ir/wp-content/uploads/2021/10/Speaker-Recognition-1.jpg",
    category: "Deep Learning",
    tags: ["CNN", "LSTM", "MFCC"],
    demoUrl: "https://github.com/manaswipatil11/speaker-recognition-deep-learning"
  },
  {
    id: 2,
    title: "Identification of Medicinal Plants",
    description: "A deep learning model for classifying Indian medicinal plant leaves using ResNet50 and Keras.",
    imageUrl: "https://dmtyylqvwgyxw.cloudfront.net/instances/132/uploads/images/custom_image/image/58086/wide_blob?v=1696679920",
    category: "Deep Learning",
    tags: ["Resnet50", "OpenCV", "Image Processing"]
  },
  {
    id: 3,
    title: "QueueIQ",
    description: "Developed a real-time queue management system leveraging YOLO object detection to identify and count people in queues from live video feeds, providing actionable insights via a web interface.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4hWlGThH5r3EZz-WOcsv3eo1S2eN4jcE98O-pVh8AjtOaCL-OlYzcQaCNYlZ1TvQQPcE&usqp=CAU",
    category: "Ultralytics YOLO",
    tags: ["YOLOv8", "Deep learning", "Python"]
  },
  {
    id: 4,
    title: "Voice-controlled wheelchair",
    description: "This project demonstrates a voice-controlled wheelchair system using a Raspberry Pi.",
    imageUrl: "https://cf-img-a-in.tosshub.com/lingo/gnt/images/story/202305/steven-hwg-zbsdrthiim4-unsplash-sixteen_nine.jpg?size=948:533",
    category: "IoT",
    tags: ["RaspianOS", "Python", "Embedded Systems"]
  },
  {
    id: 5,
    title: "Credit Card Fraud Detection",
    description: "Developed a deep learning model to detect fraudulent credit card transactions using precise data. ",
    imageUrl: "https://www.practicalecommerce.com/wp-content/uploads/2019/02/Credit-card-fraud.jpg",
    category: "Machine Learning",
    tags: ["DTC", "Python", "Data Preprocessing"]
  },
  {
    id: 6,
    title: "Zomato Sales Analaysis",
    description: "This Power BI project aims to uncover actionable insights from Zomato's sales data to optimize business strategies and drive growth.",
    imageUrl: "https://preview.redd.it/i-made-zomato-sales-visualization-v0-afoyk9plaojd1.jpg?width=1080&crop=smart&auto=webp&s=626c76a4e6c62576b5efc329c2754ec948c16cfd",
    category: "Data Visualization",
    tags: ["PowerBI", "Data Analysis"]
  }
];

export const projectCategories = [
  "All",
  "Deep Learning",
  "Ultralytics YOLO",
  "Data Visualization",
  "IoT",
  
];