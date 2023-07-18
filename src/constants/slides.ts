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
      description:
        "View all push notifications sent to user in reverse chronological order.",
      src: IMAGES.ScatterBrainzNotifications,
    },
  ],
  onebook: [
    {
      screen: "Logo",
      description:
        "OneBook is an online marketplace for local mobile (travel to you) service professionals. Users can search by service category, compare verified professionals, and send book requests. Booking costs are set by the professionals themselves including their profile, categories, costs, credentials and availability.",
      src: IMAGES.OneBookLogo,
    },
    {
      screen: "Register Landing",
      description:
        "Whether you're a service professional or a user interested in booking a service, you can register here.",
      src: IMAGES.OneBookRegisterLanding,
    },
    {
      screen: "Register",
      description:
        "Pro registration form using Formik, Yup (validation), and Firebase Authentication.",
      src: IMAGES.OneBookRegister,
    },
    {
      screen: "Login",
      description:
        "User/Pro login form using Formik, Yup (validation), and Firebase Authentication.",
      src: IMAGES.OneBookLogin,
    },
    {
      screen: "User Dashboard",
      description:
        "Users can browse service professionals from 15+ service categories, and view their search results. User can bookmark their favorite pros, and send booking requests.",
      src: IMAGES.OneBookUserDashboard,
    },
    {
      screen: "User Dashboard Search Results",
      description:
        "View service professionals in your area (25 mile radius) based on your search criteria.",
      src: IMAGES.OneBookUserDashboardSearchResults,
    },
    {
      screen: "User Pro Details",
      description:
        "View service professional details including their profile, categories, costs, credentials and availability. Users can share pro details with friends and family.",
      src: IMAGES.OneBookUserProDetails,
    },
    {
      screen: "User Availability Calendar",
      description:
        "Users can view service professional availability and send booking requests. Custom calendar created with react-native-calendars.",
      src: IMAGES.OneBookUserAvailabilityCalendar,
    },
    {
      screen: "User Confirm And Pay",
      description:
        "Confirm booking details, add description and pay using Stripe (multi-party payments). ",
      src: IMAGES.OneBookUserConfirmAndPay,
    },
    {
      screen: "User Job Board",
      description:
        "Users can view pending, booked, completed, and cancelled jobs by date.",
      src: IMAGES.OneBookUserJobBoard,
    },
    {
      screen: "User Job Details Pending",
      description:
        "View job details including date, location, and pro details. Users can cancel pending jobs.",
      src: IMAGES.OneBookUserJobDetailsPending,
    },
    {
      screen: "User Invoice Summary",
      description: "View invoice line items from user payment",
      src: IMAGES.OneBookUserInvoiceSummary,
    },
    {
      screen: "User Job Details Completed",
      description:
        "Leave a review for your service professional after job completion.",
      src: IMAGES.OneBookUserJobDetailsCompleted,
    },
    {
      screen: "User Pro Reviews",
      description: "View service professional reviews",
      src: IMAGES.OneBookUserProReviews,
    },
    {
      screen: "User Profile",
      description:
        "View user profile and update profile photo (take a photo or select from library) using react-native-image-picker. Update user email/password using Firebase Authentication. Delete account using custom cloud function.",
      src: IMAGES.OneBookUserProfile,
    },
    {
      screen: "Pro Dashboard",
      description:
        "Service pros can view job board, share their profile, and edit their profile, availability, and services.",
      src: IMAGES.OneBookProDashboard,
    },
    {
      screen: "Pro Job Board",
      description:
        "Service pros can view pending, booked, completed, and cancelled jobs in list form or by date.",
      src: IMAGES.OneBookProJobBoard,
    },
    {
      screen: "Pro Job Detail Requested",
      description:
        "Service pros can accept or decline booking requests from users.",
      src: IMAGES.OneBookProJobDetailRequested,
    },
    {
      screen: "Pro Job Detail Completed",
      description:
        "Once a service pro accepts a booking request, the job status changes to booked. The service pro can now get directions, contact the client, or view invoice summary.",
      src: IMAGES.OneBookProJobDetailCompleted,
    },
    {
      screen: "Pro Invoice Summary",
      description: "Invoice summary for completed jobs.",
      src: IMAGES.OneBookProInvoiceSummary,
    },
    {
      screen: "Pro Profile",
      description: "Service professional profile page. ",
      src: IMAGES.OneBookProProfile,
    },
    {
      screen: "Pro Availability",
      description: "Edit service professional availability. Option to add a lunch break.",
      src: IMAGES.OneBookProAvailability,
    },
    {
      screen: "Pro Services And Fees",
      description: "View pro services and fees.",
      src: IMAGES.OneBookUserServiceAndFees,
    },
    {
      screen: "Pro Edit Services and Fees",
      description: "Edit pro services and fees.",
      src: IMAGES.OneBookProServices,
    },
  ],
  othermind: [],
};
