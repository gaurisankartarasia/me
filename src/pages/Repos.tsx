// // src/components/GitHubReposPage.tsx (or wherever you place your components)

// import React, { useState, useEffect } from 'react';

// // --- Define Type for GitHub Repository Data ---
// // Based on common fields from the GitHub API response for repos
// interface GitHubRepo {
//     id: number;
//     name: string;
//     full_name: string;
//     html_url: string;
//     description: string | null; // Description can be null
//     language: string | null;    // Primary language can be null
//     stargazers_count: number;
//     watchers_count: number;
//     forks_count: number;
//     open_issues_count: number;
//     updated_at: string; // ISO 8601 format string
//     pushed_at: string; // ISO 8601 format string
//     license: { // License info can be complex or null
//         key: string;
//         name: string;
//         spdx_id: string;
//         url: string | null;
//         node_id: string;
//     } | null;
//     topics: string[]; // Array of topic strings
// }

// // Props interface (optional, if you want to pass username as prop)
// interface GitHubReposPageProps {
//     username?: string; // Make username optional prop
// }

// // Default username if not provided via props
// const DEFAULT_USERNAME = 'gaurisankartarasia'; // Change this to the desired default username

// const GitHubReposPage: React.FC<GitHubReposPageProps> = ({ username = DEFAULT_USERNAME }) => {
//     // --- State with Types ---
//     const [repos, setRepos] = useState<GitHubRepo[]>([]); // State holds an array of GitHubRepo
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     // --- Fetch GitHub Repos Data ---
//     useEffect(() => {
//         setLoading(true);
//         setError(null);
//         setRepos([]); // Clear previous repos on new fetch

//         // Fetch repos sorted by last updated time (descending)
//         fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`)
//             .then((response) => {
//                 if (!response.ok) {
//                     // Handle user not found (404) or other errors
//                     if (response.status === 404) {
//                         throw new Error(`GitHub user "${username}" not found.`);
//                     }
//                     throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
//                 }
//                 // Assert the type of the resolved JSON promise
//                 return response.json() as Promise<GitHubRepo[]>;
//             })
//             .then((data) => {
//                 setRepos(data); // Store fetched repos
//                 setLoading(false);
//             })
//             .catch((fetchError: unknown) => {
//                 console.error('Error fetching GitHub repositories:', fetchError);
//                 if (fetchError instanceof Error) {
//                     setError(fetchError.message);
//                 } else {
//                     setError("An unknown error occurred while fetching repositories.");
//                 }
//                 setLoading(false);
//             });
//         // Re-run effect if the username prop changes
//     }, [username]);

//     // --- Helper to format date ---
//     const formatDate = (dateString: string): string => {
//         try {
//             return new Intl.DateTimeFormat('en-US', {
//                 year: 'numeric',
//                 month: 'short',
//                 day: 'numeric',
//             }).format(new Date(dateString));
//         } catch (e) {
//             return dateString; // Fallback to original string if date is invalid
//         }
//     };

//     // --- Render Component ---
//     return (
//         <div className="container mx-auto p-4 md:p-6">
//             <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
//                 Git Repositories of <span className="font-mono">{username}</span>
//             </h1>

//             {/* Loading State */}
//             {loading && (
//                 <div className="text-center text-gray-500">
//                     Loading repositories...
//                 </div>
//             )}

//             {/* Error State */}
//             {error && (
//                 <div className="text-center text-red-600 bg-red-100 border border-red-400 p-4 rounded-md">
//                     <p><strong>Error:</strong> {error}</p>
//                 </div>
//             )}

//             {/* Success State - Display Repos */}
//             {!loading && !error && (
//                 <>
//                     {repos.length === 0 ? (
//                         <p className="text-center text-gray-500">No public repositories found for this user.</p>
//                     ) : (
//                         <ul className="space-y-4">
//                             {repos.map((repo) => (
//                                 <li key={repo.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200 bg-card text-card-foreground">
//                                     <div className="flex justify-between items-start mb-2">
//                                         <h2 className="text-xl font-semibold">
//                                             <a
//                                                 href={repo.html_url}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="text-blue-600 hover:underline"
//                                             >
//                                                 {repo.name}
//                                             </a>
//                                         </h2>
//                                         <div className="flex items-center space-x-4 text-sm text-muted-foreground">
//                                             {/* Stars */}
//                                             <span title="Stars" className="flex items-center">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
//                                                 {repo.stargazers_count}
//                                             </span>
//                                             {/* Forks */}
//                                             <span title="Forks" className="flex items-center">
//                                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0v2a6 6 0 0 0 6 6 4 4 0 0 0 4-4v-2m-6 6v4m0-10v-4"></path></svg>
//                                                 {repo.forks_count}
//                                             </span>
//                                         </div>
//                                     </div>

//                                     {/* Description */}
//                                     {repo.description && (
//                                         <p className="text-muted-foreground text-sm mb-3">
//                                             {repo.description}
//                                         </p>
//                                     )}

//                                     {/* Topics */}
//                                      {repo.topics && repo.topics.length > 0 && (
//                                         <div className="mb-3 flex flex-wrap gap-1">
//                                             {repo.topics.map(topic => (
//                                                 <span key={topic} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
//                                                     {topic}
//                                                 </span>
//                                             ))}
//                                         </div>
//                                      )}

//                                     {/* Language and Last Updated */}
//                                     <div className="flex justify-between items-center text-xs text-muted-foreground">
//                                         <span>
//                                             {repo.language ? `Primary Language: ${repo.language}` : 'No language specified'}
//                                         </span>
//                                         <span>
//                                             Last updated: {formatDate(repo.updated_at)}
//                                         </span>
//                                     </div>
//                                 </li>
//                             ))}
//                         </ul>
//                     )}
//                 </>
//             )}
//         </div>
//     );
// };

// export default GitHubReposPage;











// src/components/GitHubReposPage.tsx
import React, { useState, useEffect } from 'react';
import { Star, GitFork, AlertTriangle } from 'lucide-react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"; // Assuming shadcn/ui components are aliased to @/components/ui
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    topics: string[];
}

interface GitHubReposPageProps {
    username?: string;
}

const DEFAULT_USERNAME = 'gaurisankartarasia';

const GitHubReposPage: React.FC<GitHubReposPageProps> = ({ username = DEFAULT_USERNAME }) => {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        setRepos([]);

        fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`)
            .then((response) => {
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error(`GitHub user "${username}" not found.`);
                    }
                    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
                }
                return response.json() as Promise<GitHubRepo[]>;
            })
            .then((data) => {
                setRepos(data);
                setLoading(false);
            })
            .catch((fetchError: unknown) => {
                console.error('Error fetching GitHub repositories:', fetchError);
                if (fetchError instanceof Error) {
                    setError(fetchError.message);
                } else {
                    setError("An unknown error occurred while fetching repositories.");
                }
                setLoading(false);
            });
    }, [username]);

    const formatDate = (dateString: string): string => {
        try {
            return new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            }).format(new Date(dateString));
        } catch (e) {
            return dateString;
        }
    };

    const renderSkeletons = () => (
        <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
                 <Card key={index} className="w-full ">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <Skeleton className="h-6 w-1/2" />
                            <div className="flex space-x-4">
                                <Skeleton className="h-5 w-12" />
                                <Skeleton className="h-5 w-12" />
                            </div>
                        </div>
                         <Skeleton className="h-4 w-full mt-2" />
                         <Skeleton className="h-4 w-3/4 mt-1" />
                    </CardHeader>
                    <CardContent>
                         <div className="flex flex-wrap gap-2 mb-4">
                            <Skeleton className="h-5 w-16 rounded-full" />
                            <Skeleton className="h-5 w-20 rounded-full" />
                            <Skeleton className="h-5 w-14 rounded-full" />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between text-xs text-muted-foreground">
                       <Skeleton className="h-4 w-32" />
                       <Skeleton className="h-4 w-40" />
                    </CardFooter>
                </Card>
            ))}
        </div>
    );

    return (
        <div className="container mx-auto p-4 md:p-8 min-h-screen bg-background text-foreground">
            <div className="mb-8 text-center">
                
                <p className="text-xl text-muted-foreground mt-2">
                    Repositories from <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="font-mono text-primary hover:underline hover:text-blue-600 underline-offset-4">{username}</a>
                </p>
            </div>

            {loading && renderSkeletons()}

            {error && (
                <Alert variant="destructive" className="max-w-xl mx-auto">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error Fetching Data</AlertTitle>
                    <AlertDescription>
                       {error} Please check the username or try again later.
                    </AlertDescription>
                </Alert>
            )}

            {!loading && !error && (
                <>
                    {repos.length === 0 ? (
                        <p className="text-center text-muted-foreground text-lg mt-10">
                            No public repositories found for this user.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {repos.map((repo) => (
                                <Card key={repo.id} className="flex flex-col shadow-lg justify-between  transition-shadow duration-300 ease-in-out border-border/60">
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-xl">
                                                <a
                                                    href={repo.html_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-primary hover:underline underline-offset-4 hover:text-blue-600 transition-colors"
                                                >
                                                    {repo.name}
                                                </a>
                                            </CardTitle>
                                             <div className="flex items-center space-x-3 text-sm text-muted-foreground shrink-0">
                                                <span title="Stars" className="flex items-center">
                                                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                                                    {repo.stargazers_count}
                                                </span>
                                                <span title="Forks" className="flex items-center">
                                                    <GitFork className="h-4 w-4 mr-1 text-green-600" />
                                                    {repo.forks_count}
                                                </span>
                                            </div>
                                        </div>
                                         {repo.description && (
                                            <CardDescription className="pt-2 text-sm h-10 overflow-hidden text-ellipsis">
                                                {repo.description}
                                            </CardDescription>
                                        )}
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        {repo.topics && repo.topics.length > 0 && (
                                            <div className="mb-4 flex flex-wrap gap-2">
                                                {repo.topics.slice(0, 4).map(topic => (
                                                    <Badge key={topic} variant="secondary" className="font-normal">
                                                        {topic}
                                                    </Badge>
                                                ))}
                                                {repo.topics.length > 4 && (
                                                    <Badge variant="outline">...</Badge>
                                                )}
                                            </div>
                                        )}
                                    </CardContent>
                                     <CardFooter className="flex justify-between items-center text-xs text-muted-foreground border-t pt-4">
                                        <div className="flex items-center">
                                            {repo.language && (
                                                <>
                                                    <span className={`h-3 w-3 rounded-full mr-1.5 ${getLanguageColor(repo.language)}`}></span>
                                                    <span>{repo.language}</span>
                                                </>
                                            )}
                                        </div>
                                        <span>
                                            Updated: {formatDate(repo.updated_at)}
                                        </span>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

// Simple helper for language colors (can be expanded)
const getLanguageColor = (language: string): string => {
    const colors: { [key: string]: string } = {
        'TypeScript': 'bg-blue-500',
        'JavaScript': 'bg-yellow-500',
        'Python': 'bg-green-600',
        'Java': 'bg-orange-500',
        'HTML': 'bg-red-600',
        'CSS': 'bg-purple-600',
        'Go': 'bg-cyan-500',
        'Rust': 'bg-orange-700',
        'Shell': 'bg-lime-600'
    };
    return colors[language] || 'bg-gray-500';
};

export default GitHubReposPage;