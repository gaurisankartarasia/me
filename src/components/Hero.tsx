
// import { useState, useEffect } from "react";
// import {
//   Github,
//   Linkedin,
//   Instagram,
//   Mail
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Separator } from "@/components/ui/separator";

// import GitHubProfileCard from './github'


// // Create a module-level variable to persist through component re-renders
// // This will persist until page refresh
// let cachedImageLoaded = false;

// export default function Hero() {
//   const [imageLoaded, setImageLoaded] = useState(cachedImageLoaded);
//   const imageSrc = "https://firebasestorage.googleapis.com/v0/b/stellar-wings.appspot.com/o/IMG_20240807_235955_11zon.jpg?alt=media&token=204ab2c4-926a-44b0-88d2-394dc1f34251";

//   // Preload image when component mounts if not already loaded
//   useEffect(() => {
//     if (!cachedImageLoaded) {
//       const img = new Image();
//       img.src = imageSrc;
//       img.onload = () => {
//         cachedImageLoaded = true;
//         setImageLoaded(true);
//       };
//     }
//   }, []);

//   const socialPrimary = [
//     {
//       icon: Mail,
//       label: "Email",
//       href: "mailto:gaurisankartarasia@gmail.com?subject=From Your Website&body=Hello%20Gaurisankar,",
//     },
//     {
//       icon: Linkedin,
//       label: "LinkedIn",
//       href: "https://linkedin.com/in/gaurisankar-tarasia-0a32a8235",
//     },
//     {
//       icon: Github,
//       label: "GitHub",
//       href: "https://github.com/gaurisankartarasia",
//     },
//     {
//       icon: Instagram,
//       label: "Instagram",
//       href: "https://www.instagram.com/gaurisankartarasia/",
//     },
//   ];

//   return (
//     <div className="flex items-center justify-center h-96 p-4 bg-background">

// <GitHubProfileCard/>

//       <Card className="w-full max-w-4xl">
//         <CardContent className="p-6 md:p-8">
//           <div className="grid gap-8 md:grid-cols-2 items-center">
//             {/* Left Column: Profile */}
//             <div className="flex flex-col items-center md:items-start space-y-6">
//               <div className="relative">
//                 <Avatar className="w-32 h-32 md:w-40 md:h-40">
//                   <AvatarImage
//                     src={imageSrc}
//                     alt="Gaurisankar Tarasia"
//                     className={`object-cover transition-opacity duration-300 ${imageLoaded || cachedImageLoaded ? 'opacity-100' : 'opacity-0'}`}
//                   />
//                   <AvatarFallback className="text-xl">GT</AvatarFallback>
//                 </Avatar>
//               </div>

//               <div className="text-center md:text-left">
//                 <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
//                   Gaurisankar Tarasia
//                 </h1>
//               </div>
//             </div>

//             {/* Right Column: Socials & Resume */}
//             <div className="space-y-6">
//               <div className="grid grid-cols-4 gap-2">
//                 <TooltipProvider>
//                   {socialPrimary.map((social) => (
//                     <Tooltip key={social.label}>
//                       <TooltipTrigger asChild>
//                         <a
//                           href={social.href}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex flex-col items-center justify-center p-3 rounded-md border hover:bg-accent transition-colors"
//                         >
//                           <social.icon className="h-4 w-4 mb-1" />
//                         </a>
//                       </TooltipTrigger>
//                       <TooltipContent>
//                         <p>Go to {social.label}</p>
//                       </TooltipContent>
//                     </Tooltip>
//                   ))}
//                 </TooltipProvider>
//               </div>

//               <Separator className="my-4" />

//               <div className="flex justify-center space-x-4">
//                 <Button variant="outline" asChild size="sm">
//                   <a
//                     href="https://www.canva.com/design/DAGhhbzugGA/8XIdx8tWkO4MEyiDVJIC-A/view?utm_content=DAGhhbzugGA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h55fa4fb22f"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     View Resume
//                   </a>
//                 </Button>

//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button variant="default" size="sm">
//                       Download CV
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="end">
//                     <DropdownMenuItem asChild>
//                       <a
//                         href="https://raw.githubusercontent.com/gaurisankartarasia/4565dnfi4/main/Gaurisankar%20Tarasia20250313.pdf"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         PDF Format
//                       </a>
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
      
//     </div>
//   );
// }



import React, { useState, useEffect, ElementType } from "react"; // Import React hooks and ElementType for icon typing
import {
    Github,
    Linkedin,
    Instagram,
    Mail
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

// --- Define Type for GitHub User Data ---
interface GitHubUserData {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string | null; // Name can be null
    company: string | null;
    blog: string | null;
    location: string | null; // Location can be null
    email: string | null;
    hireable: boolean | null;
    bio: string | null; // Bio can be null
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

// --- Define Type for Social Links ---
interface SocialLink {
    icon: ElementType; // Use ElementType for component icons like Lucide icons
    label: string;
    href: string;
}

export default function Hero(): JSX.Element { // Define return type as JSX.Element
    // --- State with Types ---
    const [githubData, setGithubData] = useState<GitHubUserData | null>(null); // State can be GitHubUserData or null
    const [loading, setLoading] = useState<boolean>(true); // State is boolean
    const [error, setError] = useState<string | null>(null); // State is string or null
    const githubUsername = 'gaurisankartarasia'; // Your GitHub username

    // --- Fetch GitHub Data ---
    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(`https://api.github.com/users/${githubUsername}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
                }
                return response.json() as Promise<GitHubUserData>; // Assert the type of the resolved JSON promise
            })
            .then((data) => {
                setGithubData(data);
                setLoading(false);
            })
            .catch((fetchError: unknown) => { // Catch unknown error type
                console.error('Error fetching GitHub profile:', fetchError);
                // Set error message based on error type
                if (fetchError instanceof Error) {
                    setError(fetchError.message);
                } else {
                    setError("An unknown error occurred");
                }
                setLoading(false);
            });
    }, [githubUsername]);

    // --- Social Links with Type ---
    const socialPrimary: SocialLink[] = [ // Type the array as SocialLink[]
        {
            icon: Mail,
            label: "Email",
            href: "mailto:gaurisankartarasia@gmail.com?subject=From Your Website&body=Hello%20Gaurisankar,",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://linkedin.com/in/gaurisankar-tarasia-0a32a8235",
        },
        {
            icon: Github,
            label: "GitHub",
            // Use fetched URL if available, otherwise construct it
            href: githubData?.html_url ?? `https://github.com/${githubUsername}`, // Use nullish coalescing (??)
        },
        {
            icon: Instagram,
            label: "Instagram",
            href: "https://www.instagram.com/gaurisankartarasia/",
        },
    ];

    // --- Render Loading State ---
    if (loading) {
        return (
            <div className="flex items-center justify-center h-96 p-4 bg-background">
                <Card className="w-full max-w-4xl">
                    <CardContent className="p-6 md:p-8 text-center">
                        Loading GitHub Profile...
                    </CardContent>
                </Card>
            </div>
        );
    }

    // --- Render Error State ---
    if (error) {
        return (
            <div className="flex items-center justify-center h-96 p-4 bg-background">
                <Card className="w-full max-w-4xl">
                    <CardContent className="p-6 md:p-8 text-center text-red-600">
                        Error loading profile: {error}
                    </CardContent>
                </Card>
            </div>
        );
    }

    // --- Render Main Content ---
    // Type safety ensures githubData is not null here if loading/error checks passed
    // but optional chaining (?.) is still good practice for potentially null fields like name, bio, location
    return (
        <div className="flex items-center justify-center min-h-96 p-4 bg-background">
            <Card className="w-full max-w-4xl">
                <CardContent className="p-6 md:p-8">
                    <div className="grid gap-8 md:grid-cols-2 items-center">
                        {/* Left Column: Profile */}
                        <div className="flex flex-col items-center md:items-start space-y-4">
                            <div className="relative">
                                <Avatar className="w-32 h-32 md:w-40 md:h-40 border">
                                    <AvatarImage
                                        src={githubData?.avatar_url} // Optional chaining safe access
                                        alt={githubData?.name ?? githubData?.login ?? "User Avatar"} // Fallback chain
                                        className="object-cover"
                                    />
                                    <AvatarFallback className="text-xl">
                                        {githubData?.login?.substring(0, 2).toUpperCase() ||
                                         githubData?.name?.substring(0, 2).toUpperCase() ||
                                         "GT"}
                                    </AvatarFallback>
                                </Avatar>
                            </div>

                            <div className="text-center md:text-left">
                                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                                    {githubData?.name ?? githubData?.login ?? "GitHub User"} {/* Fallback chain */}
                                </h1>
                                {githubData?.bio && (
                                    <p className="text-muted-foreground mt-2 text-sm md:text-base">
                                        {githubData.bio}
                                    </p>
                                )}
                                {githubData?.location && (
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Location: {githubData.location}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Socials & Resume */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-4 gap-2">
                                <TooltipProvider>
                                    {socialPrimary.map((social) => (
                                        <Tooltip key={social.label}>
                                            <TooltipTrigger asChild>
                                                <a
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex flex-col items-center justify-center p-3 rounded-md border hover:bg-accent transition-colors"
                                                    aria-label={`Go to ${social.label}`}
                                                >
                                                    {/* Render the icon component dynamically */}
                                                    <social.icon className="h-4 w-4" />
                                                </a>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Go to {social.label}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    ))}
                                </TooltipProvider>
                            </div>

                            <Separator className="my-4" />

                            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
                                <Button variant="outline" asChild size="sm">
                                    <a
                                        href="https://www.canva.com/design/DAGhhbzugGA/8XIdx8tWkO4MEyiDVJIC-A/view?utm_content=DAGhhbzugGA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h55fa4fb22f"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Resume
                                    </a>
                                </Button>

                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="default" size="sm">
                                            Download CV
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem asChild>
                                            <a
                                                href="https://raw.githubusercontent.com/gaurisankartarasia/4565dnfi4/main/Gaurisankar%20Tarasia20250313.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                download
                                            >
                                                PDF Format
                                            </a>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}