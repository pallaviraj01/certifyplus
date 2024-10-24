
export interface SearchOption {
  name: string;
  route: string;
}

// Predefined search options
const searchOptions : SearchOption[] = [
  { name: "Caste Certificate", route: "/apply" },
  { name: "Residence Certificate", route: "/apply" },
  { name: "Birth Certificate", route: "/apply" },
  { name: "Income Certificate", route: "/apply" },
  { name: "Track Application", route: "/track" },
  { name: "Download Certificate", route: "/download" },
  { name: "Verify Certificate", route: "/verify" },
  { name: "Dashboard", route: "/dashboard" },
  { name: "User guide", route: "/guide" },
  { name: "Support Centre", route: "/support" },
  { name: "Contact", route: "/support" },
  { name: "District Resources", route: "/resources" },
  { name: "Officer dashboard", route: "/officer" },
  { name: "Frequently asked questions", route: "/faq" },
  { name: "Generate Reports", route: "/reports" },
  { name: "Reports Analysis", route: "/reports" },
  { name: "Report an issue", route: "/report-issue" },
  { name: "Resource management", route: "/manage" },
  // Add more options as needed
];
  
export default searchOptions;