import { IMAGES } from "./images";

export const SLIDES = {
  scatterbrainz: [
    {
      screen: "Sign Up",
      description:
        "Sign up user using Firebase Authentication, react-hook-form, Yup (validation)",
      src: IMAGES.ScatterBrainzSignUp,
    },
    {
      screen: "Login",
      description:
        "Login user using Firebase Authentication, react-hook-form, Yup (validation)",
      src: IMAGES.ScatterBrainzLogin,
    },
    {
      screen: "Forgot Password",
      description:
        "Forgot password using Firebase Authentication, react-hook-form, Yup (validation)",
      src: IMAGES.ScatterBrainzForgotPassword,
    },
    {
      screen: "Home",
      description:
        "ScatterBrainz Home page outfitted with custom card components created with React Native Paper",
      src: IMAGES.ScatterBrainzHome,
    },
    {
      screen: "Settings",
      description: "User settings screen",
      src: IMAGES.ScatterBrainzSettings,
    },
    {
      screen: "Profile",
      description:
        "Update profile photo (take a photo or select from library) using react-native-image-picker. Update user email/password using Firebase Authentication. Delete account using custom cloud function.",
      src: IMAGES.ScatterBrainzProfile,
    },
    {
      screen: "Family Page",
      description:
        "View family members and send non-user family members your family code to join your ScatterBrainz family.",
      src: IMAGES.ScatterBrainzFamilyPage,
    },
    {
      screen: "Join Family",
      description:
        "Onboarding screen for non-user family members to join your ScatterBrainz family.",
      src: IMAGES.ScatterBrainzJoinFamily,
    },
    {
      screen: "Plan",
      description:
        "Plan screen using RevenueCat to manage in-app purchases/subscriptions. Includes a free 14-day trial with limited in-app feature access.",
      src: IMAGES.ScatterBrainzPlan,
    },
    {
      screen: "Time To Eat",
      description:
        "Access to family Breakfast Menu, Lunch Menu, Dinner Menu, and Restaurant Reviews.",
      src: IMAGES.ScatterBrainzTimeToEat,
    },
    {
      screen: "What's For Dinner",
      description:
        "Family members can add to their dinner category collection. They can also view `Tonight's Options` and vote on what they want for dinner. Each family comes preloaded with over 40 dinner recipes in their respective categories.",
      src: IMAGES.ScatterBrainzWhatsForDinner,
    },
    {
      screen: "Dinner Category Recipes",
      description:
        "Family members can create, read, update, and delete recipes for each dinner category.  They can also vote on what recipes they want for dinner.",
      src: IMAGES.ScatterBrainzDinnerCategoryRecipes,
    },
    {
      screen: "Recipe Detail",
      description:
        "Family members can create, read, update, and delete a dinner recipe. They can also link to the recipe's website, and send it to their family members.",
      src: IMAGES.ScatterBrainzRecipeDetail,
    },
    {
      screen: "Tonight's Options",
      description:
        "Headquarters for voting on family dinner options. Family members can vote on each other's dinner options, and view the results. Push notifications configured using OneSignal.",
      src: IMAGES.ScatterBrainzTonightsOptions,
    },
    {
      screen: "Recipe Vote",
      description:
        "Modal that allows family members to vote on a recipe, and allows family admin to select and send tonight's dinner option.",
      src: IMAGES.ScatterBrainzRecipeVote,
    },
    {
      screen: "Family Headquarters",
      description:
        "Access to family calendar, house rules, and medicine reminders.",
      src: IMAGES.ScatterBrainzFamilyHeadquarters,
    },
    {
      screen: "Family Events",
      description:
        "Custom calendar component created with react-native-calendars. Family members can create, read, update, and delete events. Option to sync with local device calendars.",
      src: IMAGES.ScatterBrainzFamilyEvents,
    },
    {
      screen: "Family Events Add Item",
      description:
        "Modal where family members create/update family events. Choose family members to invite, and set a reminder time. Google Cloud Task sends scheduled push notifcation at reminder and event time.",
      src: IMAGES.ScatterBrainzFamilyEventsAddItem,
    },
    {
      screen: "Sync Calendars",
      description:
        "Sync local device calendars with ScatterBrainz family calendar.",
      src: IMAGES.ScatterBrainzSyncCalendars,
    },
    {
      screen: "Medicine Reminders",
      description:
        "Assign medicine reminders to family members. Family members can view their medicine reminders, and check them off as they are completed. Notify All option sends push notification to all family members.",
      src: IMAGES.ScatterBrainzMedicineReminders,
    },
    {
      screen: "Medicine Reminder Add Item",
      description: "Add a new medicine reminder.",
      src: IMAGES.ScatterBrainzMedicineReminderAddItem,
    },
    {
      screen: "Medicine Reminder Checklist",
      description: "Keep track of medicine reminders that have been completed.",
      src: IMAGES.ScatterBrainzMedicineReminderChecklist,
    },
    {
      screen: "Lists",
      description:
        "Keep running family lists in one place. Family members can check off items as they are completed, which sends a push notifcation to family members.",
      src: IMAGES.ScatterBrainzLists,
    },
    {
      screen: "To Do List",
      description:
        "Example user list category. Keep track of which items have been completed.",
      src: IMAGES.ScatterBrainzToDos,
    },
    {
      screen: "To Do Add Item",
      description:
        "Add a new item to a list category. Option to set a window of time to receive reminders. ",
      src: IMAGES.ScatterBrainzToDoAddItem,
    },
    {
      screen: "Notifications",
      description: "View all push notifications sent to user in reverse chronological order.",
      src: IMAGES.ScatterBrainzNotifications,
    },
  ],
  onebook: [
    {
      screen: "Logo",
      description: "",
      src: IMAGES.OneBookLogo,
    },
    {
      screen: "Register Landing",
      description: "",
      src: IMAGES.OneBookRegisterLanding,
    },
    {
      screen: "Register",
      description: "",
      src: IMAGES.OneBookRegister,
    },
    {
      screen: "Login",
      description: "",
      src: IMAGES.OneBookLogin,
    },
    {
      screen: "Pro Availability",
      description: "",
      src: IMAGES.OneBookProAvailability,
    },
    {
      screen: "Pro Dashboard",
      description: "",
      src: IMAGES.OneBookProDashboard,
    },
    {
      screen: "Pro Edit Profile",
      description: "",
      src: IMAGES.OneBookProEditProfile,
    },
    {
      screen: "Pro Invoice Summary",
      description: "",
      src: IMAGES.OneBookProInvoiceSummary,
    },
    {
      screen: "Pro Job Board",
      description: "",
      src: IMAGES.OneBookProJobBoard,
    },
    {
      screen: "Pro Job Detail Completed",
      description: "",
      src: IMAGES.OneBookProJobDetailCompleted,
    },
    {
      screen: "Pro Job Detail Requested",
      description: "",
      src: IMAGES.OneBookProJobDetailRequested,
    },
    {
      screen: "Pro Profile",
      description: "",
      src: IMAGES.OneBookProProfile,
    },
    {
      screen: "Pro Services",
      description: "",
      src: IMAGES.OneBookProServices,
    },
    {
      screen: "User Availability Calendar",
      description: "",
      src: IMAGES.OneBookUserAvailabilityCalendar,
    },
    {
      screen: "User Confirm And Pay",
      description: "",
      src: IMAGES.OneBookUserConfirmAndPay,
    },
    {
      screen: "User Dashboard",
      description: "",
      src: IMAGES.OneBookUserDashboard,
    },
    {
      screen: "User Dashboard Search Results",
      description: "",
      src: IMAGES.OneBookUserDashboardSearchResults,
    },
    {
      screen: "User Invoice Summary",
      description: "",
      src: IMAGES.OneBookUserInvoiceSummary,
    },
    {
      screen: "User Job Board",
      description: "",
      src: IMAGES.OneBookUserJobBoard,
    },
    {
      screen: "User Job Details Completed",
      description: "",
      src: IMAGES.OneBookUserJobDetailsCompleted,
    },
    {
      screen: "User Job Details Pending",
      description: "",
      src: IMAGES.OneBookUserJobDetailsPending,
    },
    {
      screen: "User Pro Details",
      description: "",
      src: IMAGES.OneBookUserProDetails,
    },
    {
      screen: "User Pro Reviews",
      description: "",
      src: IMAGES.OneBookUserProReviews,
    },
    {
      screen: "User Profile",
      description: "",
      src: IMAGES.OneBookUserProfile,
    },
    {
      screen: "User ServicesAnd Fees",
      description: "",
      src: IMAGES.OneBookUserServiceAndFees,
    }
  ],
  othermind: [],
};
