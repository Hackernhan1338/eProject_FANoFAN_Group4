import React, { Component } from "react";
import Chatbot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import "./Customer.scss";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
class CustomerServiceChat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      issue: "",
    };
  }

  handleNameInput = (name) => {
    this.setState({ name });
  };

  handleIssueSelection = (issue) => {
    this.setState({ issue }, () => {
      this.chatbotRef && this.chatbotRef.triggerNextStep();
    });
  };

  render() {
    const steps = [
      {
        id: "Greet",
        message: "Hi! It's FanNoFan messaging assistant again",
        trigger: "waiting1",
      },
      {
        id: "waiting1",
        message:
          "Inaccurate info can cause me to repeat questions or get you to the wrong solution. For the best experience, give me the most accurate info about your issue as possible.",
        trigger: "Ask Name",
      },
      {
        id: "Ask Name",
        message: "Please enter your name",
        trigger: "Capture Name",
      },

      {
        id: "Capture Name",
        user: true,
        trigger: "Name",
      },
      {
        id: "Name",
        message: "Hi {previousValue}, Please select your issue",
        trigger: "Issue",
      },
      {
        id: "Issue",
        options: [
          {
            value: "An Item I Ordered",
            label: "An Item I Ordered",
            trigger: "CheckOrders",
          },
          { value: "Payment", label: "Payment", trigger: "Payment" },
          {
            value: "Policy returned goods exchange and refund",
            label: "Policy returned goods exchange and refund",
            trigger: "PolicyReturnedGoods",
          },
          {
            value: "Delivery and shipping",
            label: "Delivery and shipping",
            trigger: "Deliveryandshipping",
          },
          {
            value: "Warranty policy",
            label: "Warranty policy",
            trigger: "Warrantypolicy",
          },
        ],
      },
      {
        id: "CheckOrders",
        message: `Let's see if there are any recent orders for you...`,
        trigger: "OrdersExist",
      },
      {
        id: "OrdersExist",
        options: [
          { value: true, label: "Yes", trigger: "ItemOrdered" },
          { value: false, label: "No", trigger: "waiting2" },
        ],
      },
      {
        id: "ItemOrdered",
        message: `Great! We found your recent order. Could you select the item you're looking for from your recent orders below?`,
        trigger: "CaptureOrdered",
      },
      {
        id: "CaptureOrdered",
        user: true,
        trigger: "Ordered",
      },
      {
        id: "Ordered",
        message:
          "Your order is being shipped to your address. Estimated shipping time is 3-5 days",
        trigger: "GoBackToName",
      },
      {
        id: "waiting2",
        message: `Sorry, I’m not finding any recent orders.`,
        trigger: "GoBackToName",
      },
      {
        id: "Payment",
        message: `We accept the following payment methods: credit cards, debit cards, bank transfers, and e-wallets such as PayPal.`,
        trigger: "waiting3",
      },
      {
        id: "waiting3",
        message: `You can choose the appropriate payment method during the online payment process.`,
        trigger: "waiting4",
      },
      {
        id: "waiting4",
        message: `If you encounter any issues during the checkout process, please contact our customer support team for help.`,
        trigger: "GoBackToName",
      },
      {
        id: "PolicyReturnedGoods",
        message: `Our return policy allows you to return purchased items within a specified timeframe. Please refer to our website or documentation for detailed information on the specific timeframe and conditions for returns.`,
        trigger: "waiting5",
      },
      {
        id: "waiting5",
        message: `For refunds, once the returned item is received and inspected, we will initiate the refund process. The refund can be issued to the original payment method or provided in the form of store credit, depending on your preference and our policies.`,
        trigger: "waiting6",
      },
      {
        id: "waiting6",
        message: `We strive to process returns, exchanges, and refunds as quickly as possible. However, please allow for some processing time to ensure accurate handling of your request.`,
        trigger: "GoBackToName",
      },
      {
        id: "Deliveryandshipping",
        message: `We offer delivery and shipping services to your address. The delivery time and shipping fees may vary depending on the location and the delivery method you choose.`,
        trigger: "waiting7",
      },
      {
        id: "waiting7",
        message: `We provide shipment information and tracking numbers so that you can monitor the progress of your delivery.`,
        trigger: "waiting8",
      },
      {
        id: "waiting8",
        message: `We are committed to ensuring the safety and timely delivery of your items. However, in the event of any unforeseen circumstances or delivery delays, we will provide support and resolve the situation promptly.`,
        trigger: "GoBackToName",
      },
      {
        id: "Warrantypolicy",
        message: `Warranty Period: Products are usually covered by a warranty for a specific period of time, such as 6 months, 1 year, or even longer. Please check the company's documentation or website for specific warranty periods for the product you are interested in.`,
        trigger: "waiting9",
      },
      {
        id: "waiting9",
        message: `Warranty Coverage: The warranty policy defines the issues or defects that the company will repair or replace free of charge. Warranty coverage may include technical issues, manufacturing defects, or faults caused by improper use according to the instructions.`,
        trigger: "waiting10",
      },
      {
        id: "waiting10",
        message:
          "Warranty Conditions: Warranty policies often require that the product is used correctly and not damaged due to misuse or accidents. Warranty conditions may also require that the product is not modified or repaired by the user or unauthorized third parties.",
        trigger: "waiting11",
      },
      {
        id: "waiting11",
        message:
          "Warranty Process: The warranty policy provides instructions on how to request warranty service, including contacting customer service, sending the product to the company or authorized service center, and other specific steps that need to be followed.",
        trigger: "waiting12",
      },
      {
        id: "waiting12",
        message:
          "Warranty Limitations: Warranty policies may have certain limitations, such as not covering accompanying accessories or not covering issues caused by improper use or voluntary user actions.",
        trigger: "GoBackToName",
      },
      {
        id: "GoBackToName",
        options: [{ value: "GoBack", label: "Go Back", trigger: "Name" }],
      },
    ];

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container>
          <Segment floated="left" className="custom-chatbot-container">
            <Chatbot
              className="chatbox"
              steps={steps}
              ref={(ref) => (this.chatbotRef = ref)}
            />
          </Segment>
        </Container>
      </motion.div>
    );
  }
}

export default CustomerServiceChat;
