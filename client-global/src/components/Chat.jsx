import { ChatView, ChatUIProvider, darkChatTheme } from "@pushprotocol/uiweb";
import { ethers } from "ethers";
export default function App() {
  const pushAIWalletAddress = "0xCd24E9273212164035013A1aa56a0Eb7A806f702";
  const PushChatTheme = {
    borderRadius: {
      ChatView: "32px",
      chatProfile: "29px",
      messageInput: "29px",
      searchInput: "99px",
      modal: "16px",
      modalInnerComponents: "12px",
    },

    backgroundColor: {
      ChatViewBackground: "rgba(18, 18, 24, 0.65)",
      chatProfileBackground: "#2A2A39",
      messageInputBackground: "transparent",
      chatSentBubbleBackground: "#AF3FB1",
      chatReceivedBubbleBackground: "#424258",
      encryptionMessageBackground: "#2A2A39",
      buttonBackground: "rgb(202, 89, 155)",
      modalBackground: "#2F3137",
      criteriaLabelBackground: "rgb(47, 49, 55)",
      modalInputBackground: "transparent",
      modalHoverBackground: "rgb(64, 70, 80)",
      buttonDisableBackground: "#787E99",
      toastSuccessBackground:
        "linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #2F3137 42.81%)",
      toastErrorBackground:
        "linear-gradient(89.96deg, #FF2070 -101.85%, #2F3137 51.33%)",
      toastShadowBackground: "#00000010",
    },

    fontSize: {
      chatProfileText: "17px",
      messageInputText: "16px",
      chatSentBubbleText: "14px",
      chatReceivedBubbleText: "14px",
      timestamp: "15px",
      // chatBubblesSenderAddressText: '16px',
      encryptionMessageText: "13px",
      chatReceivedBubbleAddressText: "12px",
      chatReceivedBubbleTimestampText: "12px",
      chatSentBubbleTimestampText: "12px",
      searchInputText: "16px",
      searchPlaceholderText: "16px",
    },

    fontWeight: {
      chatProfileText: "500",
      messageInputText: "400",
      chatSentBubbleText: "400",
      chatReceivedBubbleText: "400",
      timestamp: "300",
      // chatBubblesSenderAddressText: '300',
      encryptionMessageText: "400",
      chatReceivedBubbleAddressText: "300",
      chatReceivedBubbleTimestampText: "400",
      chatSentBubbleTimestampText: "400",
      searchInputText: "400",
      searchPlaceholderText: "400",
    },

    fontFamily: "inherit",

    border: {
      ChatView: "1px solid #3A3A4A",
      chatProfile: "1px solid #3A3A4A",
      messageInput: "1px solid #3A3A4A",
      searchInput: "1px solid transparent",
      modal: "none",
      modalInnerComponents: "1px solid rgb(74, 79, 103)",
    },

    iconColor: {
      emoji: "rgba(120, 126, 153, 1)",
      attachment: "rgba(120, 126, 153, 1)",
      sendButton: "rgba(120, 126, 153, 1)",
      groupSettings: "rgba(120, 126, 153, 1)",
    },
    textColor: {
      chatProfileText: "#fff",
      messageInputText: "rgb(182, 188, 214)",
      chatSentBubbleText: "#fff",
      chatReceivedBubbleText: "#fff",
      timestamp: "#87879A",
      // chatBubblesSenderAddressText: 'rgb(182, 188, 214)',
      encryptionMessageText: "rgb(182, 188, 214)",
      buttonText: "#fff",
      chatReceivedBubbleAddressText: "#87879A",
      chatReceivedBubbleTimestampText: "red",
      chatSentBubbleTimestampText: "red",
      searchInputText: "#fff",
      searchPlaceholderText: "rgb(101, 119, 149)",
      modalHeadingText: "#fff",
      modalSubHeadingText: "rgb(182, 188, 214)",
      buttonDisableText: "#B6BCD6",
    },
    backdropFilter: "blur(6.5px)",
    spinnerColor: "rgb(202, 89, 155)",
    scrollbarColor: "rgb(202, 89, 155)",
    // backdropFilter: 'blur(6.5px)',
    // modalBackgroundColor:'rgba(47, 49, 55, 1)',
    // spinnerColor:'rgb(202, 89, 155)',
    // scrollbarColor:'rgb(202, 89, 155)',
    // //the rest param needs to be included in categories
    // modalPrimaryTextColor: '#B6BCD6',
    // modalSearchBarBorderColor: '#4A4F67',
    // modalSearchBarBackground: '#282A2E',
    // snapFocusBg: '#404650',
    // groupButtonBackgroundColor: '#2F3137',
    // groupButtonTextColor: '#787E99',
    // modalConfirmButtonBorder: '1px solid #787E99',
    // groupSearchProfilBackground: '#404650',
    // modalInputBorderColor: '#4A4F67',
    // snackbarBorderText: '#B6BCD6',
    // snackbarBorderIcon:
    //     'brightness(0) saturate(100%) invert(89%) sepia(8%) saturate(1567%) hue-rotate(191deg) brightness(86%) contrast(93%)',
    // modalContentBackground: '#2F3137',
    // modalProfileTextColor: '#B6BCD6',
    // toastSuccessBackground:
    //     'linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #2F3137 42.81%)',
    // toastErrorBackground:
    //     'linear-gradient(89.96deg, #FF2070 -101.85%, #2F3137 51.33%)',
    // toastShadowColor: '#00000010',
    // toastBorderColor: '#4A4F67',
    // mainBg: '#000',
    // modalBorderColor: '#4A4F67',
    // modalDescriptionTextColor: '#787E99',
    // modalIconColor: '#787E99',
    // pendingCardBackground: 'rgba(173, 176, 190, 0.08)',
    // modalHeadingColor: '#B6BCD6',
    // defaultBorder: '#4A4F67',
  };

  return (
    <>
      <div
        style={{
          height: "75vh",
          margin: "20px auto",
          background: "black",
          borderRadius: "40px",
          maxWidth: "600px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10vh",

        }}
      >
        <ChatUIProvider theme={darkChatTheme}>
          <ChatView
            chatId={"0xCd24E9273212164035013A1aa56a0Eb7A806f702"}
            limit={10}
            isConnected={true}
            signers={ethers.Wallet.createRandom()}
            onVerificationFail={() => setShowFaucet(true)}
          />
        </ChatUIProvider>
      </div>
    </>
  );
}
