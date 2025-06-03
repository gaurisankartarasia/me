// import React, { useState, useEffect } from "react";

// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardHeader,
//   CardContent,
//   CardActions,
//   Chip,
//   Alert,
//   AlertTitle,
//   Link,
//   CardActionArea,
//   CircularProgress,
//   Container,
// } from "@mui/material";

// import { MdOutlineStarBorder, MdAltRoute } from "react-icons/md";

// import { GitHubRepo } from "@/types";

// interface GitHubReposPageProps {
//   username?: string;
// }

// const DEFAULT_USERNAME = "gaurisankartarasia";

// // Helper for language colors - returns hex values for MUI
// const getLanguageMuiColor = (language: string | null): string => {
//   if (!language) return "#A9A9A9"; // Default for null language
//   const languageKey = language.toLowerCase();
//   const colors: { [key: string]: string } = {
//     typescript: "#3178c6",
//     javascript: "#f0db4f",
//     python: "#3572A5",
//     java: "#b07219",
//     html: "#e34c26",
//     css: "#563d7c",
//     go: "#00ADD8",
//     rust: "#dea584",
//     shell: "#89e051",
//     "c#": "#178600",
//     "c++": "#f34b7d",
//     php: "#4F5D95",
//     ruby: "#701516",
//     swift: "#F05138",
//     kotlin: "#A97BFF",
//     "jupyter notebook": "#DA5B0B",
//   };
//   return colors[languageKey] || "#A9A9A9";
// };

// const GitHubReposPage: React.FC<GitHubReposPageProps> = ({
//   username = DEFAULT_USERNAME,
// }) => {
//   const [repos, setRepos] = useState<GitHubRepo[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);
//     setRepos([]);

//     fetch(
//       `https://api.github.com/users/${username}/repos?sort=updated&direction=desc`
//     )
//       .then((response) => {
//         if (!response.ok) {
//           if (response.status === 404) {
//             throw new Error(`GitHub user "${username}" not found.`);
//           }
//           if (response.status === 403) {
//             // Handle rate limiting
//             throw new Error(
//               `GitHub API rate limit exceeded. Please try again later.`
//             );
//           }
//           throw new Error(
//             `GitHub API error: ${response.status} ${response.statusText}`
//           );
//         }
//         return response.json() as Promise<GitHubRepo[]>;
//       })
//       .then((data) => {
//         setRepos(data);
//         setLoading(false);
//       })
//       .catch((fetchError: unknown) => {
//         console.error("Error fetching GitHub repositories:", fetchError);
//         if (fetchError instanceof Error) {
//           setError(fetchError.message);
//         } else {
//           setError("An unknown error occurred while fetching repositories.");
//         }
//         setLoading(false);
//       });
//   }, [username]);

//   const formatDate = (dateString: string): string => {
//     try {
//       return new Intl.DateTimeFormat("en-US", {
//         year: "numeric",
//         month: "short",
//         day: "numeric",
//       }).format(new Date(dateString));
//     } catch {
//       return dateString;
//     }
//   };

//   const Loader = () => (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "50vh",
//       }}
//     >
//       <CircularProgress />
//     </Box>
//   );

//   return (
//     <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 }, minHeight: "100vh" }}>
//       <Box sx={{ mb: 4, textAlign: "center" }}>
//         <Typography variant="h5" component="h1" gutterBottom>
//           GitHub Repositories
//         </Typography>
//         <Typography variant="h6" color="text.secondary" component="p">
//           from{" "}
//           <Link
//             href={`https://github.com/${username}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             sx={{
//               fontFamily: "monospace",
//               color: "primary.main",
//               "&:hover": { textDecoration: "underline" },
//             }}
//           >
//             {username}
//           </Link>
//         </Typography>
//       </Box>

//       {loading && Loader()}

//       {error && (
//         <Alert severity="error" sx={{ maxWidth: "md", mx: "auto", mt: 4 }}>
//           <AlertTitle>Error Fetching Data</AlertTitle>
//           {error} Please check the username or try again later.
//         </Alert>
//       )}

//       {!loading && !error && (
//         <>
//           {repos.length === 0 ? (
//             <Typography
//               variant="subtitle1"
//               color="text.secondary"
//               sx={{ textAlign: "center", mt: 10 }}
//             >
//               No public repositories found for this user.
//             </Typography>
//           ) : (
//             <Grid container spacing={3}>
//               {repos.map((repo) => (
//                 <Grid size={{ xs: 12, sm: 6, md: 4 }} key={repo.id}>
//                   <Card
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column",
//                       height: "100%",
//                     }}
//                   >
//                     <Link
//                       href={repo.html_url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       underline="none"
//                     >
//                       <CardActionArea>
//                         <CardHeader
//                           title={
//                             <Typography
//                               variant="h6"
//                               sx={{
//                                 fontSize: "1.25rem",
//                                 fontWeight: "medium",
//                                 color: "text.primary",
//                                 "&:hover": { color: "primary.main" },
//                                 display: "block", // Ensure link takes up space for better clickability
//                                 overflow: "hidden",
//                                 textOverflow: "ellipsis",
//                                 whiteSpace: "nowrap",
//                               }}
//                             >
//                               {repo.name}
//                             </Typography>
//                           }
//                           subheader={
//                             repo.description ? (
//                               <Typography
//                                 variant="body2"
//                                 color="text.secondary"
//                                 title={repo.description}
//                                 sx={{
//                                   mt: 0.5,
//                                   height: "40px",
//                                   overflow: "hidden",
//                                   textOverflow: "ellipsis",
//                                   display: "-webkit-box",
//                                   WebkitLineClamp: 2,
//                                   WebkitBoxOrient: "vertical",
//                                 }}
//                               >
//                                 {repo.description}
//                               </Typography>
//                             ) : (
//                               <Box sx={{ height: "40px", mt: 0.5 }} />
//                             )
//                           }
//                           action={
//                             <Box
//                               sx={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: { xs: 0.5, sm: 1 },
//                                 color: "text.secondary",
//                                 flexShrink: 0,
//                                 mt: 0.5,
//                               }}
//                             >
//                               <Box
//                                 sx={{
//                                   display: "flex",
//                                   alignItems: "center",
//                                   p: 0.5,
//                                 }}
//                                 title="Stars"
//                               >
//                                 <MdOutlineStarBorder />
//                                 <Typography variant="body2" component="span">
//                                   {repo.stargazers_count}
//                                 </Typography>
//                               </Box>
//                               <Box
//                                 sx={{
//                                   display: "flex",
//                                   alignItems: "center",
//                                   p: 0.5,
//                                 }}
//                                 title="Forks"
//                               >
//                                 <MdAltRoute />
//                                 <Typography variant="body2" component="span">
//                                   {repo.forks_count}
//                                 </Typography>
//                               </Box>
//                             </Box>
//                           }
//                           sx={{
//                             alignItems: "flex-start",
//                             pb: 0,
//                             "& .MuiCardHeader-content": { overflow: "hidden" },
//                           }}
//                         />
//                         <CardContent
//                           sx={{
//                             flexGrow: 1,
//                             pt:
//                               repo.description ||
//                               (repo.topics && repo.topics.length > 0)
//                                 ? 1
//                                 : 2,
//                             pb: "8px !important",
//                           }}
//                         >
//                           {repo.topics && repo.topics.length > 0 && (
//                             <Box
//                               sx={{
//                                 display: "flex",
//                                 flexWrap: "wrap",
//                                 gap: 0.75,
//                                 mt: 1,
//                               }}
//                             >
//                               {repo.topics.slice(0, 4).map((topic) => (
//                                 <Chip
//                                   key={topic}
//                                   label={topic}
//                                   size="small"
//                                   variant="outlined"
//                                 />
//                               ))}
//                               {repo.topics.length > 4 && (
//                                 <Chip
//                                   label="..."
//                                   size="small"
//                                   variant="outlined"
//                                   title={repo.topics.slice(4).join(", ")}
//                                 />
//                               )}
//                             </Box>
//                           )}
//                         </CardContent>

//                         <CardActions
//                           sx={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                             borderTop: "1px solid",
//                             borderColor: "divider",
//                             p: 2,
//                             mt: "auto",
//                           }}
//                         >
//                           <Box
//                             sx={{
//                               display: "flex",
//                               alignItems: "center",
//                               typography: "caption",
//                               color: "text.secondary",
//                               minHeight: "14.5px",
//                             }}
//                           >
//                             {repo.language && (
//                               <>
//                                 <Box
//                                   component="span"
//                                   sx={{
//                                     height: 10,
//                                     width: 10,
//                                     borderRadius: "50%",
//                                     mr: 0.75,
//                                     backgroundColor: getLanguageMuiColor(
//                                       repo.language
//                                     ),
//                                   }}
//                                 />
//                                 {repo.language}
//                               </>
//                             )}
//                           </Box>
//                           <Typography variant="caption" color="text.secondary">
//                             Updated: {formatDate(repo.updated_at)}
//                           </Typography>
//                         </CardActions>
//                       </CardActionArea>
//                     </Link>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           )}
//         </>
//       )}
//     </Container>
//   );
// };

// export default GitHubReposPage;

import React from "react";
import { Container } from "@mui/material";
import { PageHeader } from "@/components/repo/PageHeader";
import { LoadingSpinner } from "@/components/repo/Loader";
import { ErrorAlert } from "@/components/repo/Error";
import { RepoGrid } from "@/components/repo/RepoGrid";
import { useGitHubRepos } from "@/hooks/useGitRepos";

import { DEFAULT_GIT_USERNAME } from "@/config/personal_data";

interface GitHubReposPageProps {
  username?: string;
}

const GitHubReposPage: React.FC<GitHubReposPageProps> = ({
  username = DEFAULT_GIT_USERNAME,
}) => {
  const { repos, loading, error } = useGitHubRepos(username);

  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
      <PageHeader username={username} />

      {loading && <LoadingSpinner />}
      {error && <ErrorAlert error={error} />}
      {!loading && !error && <RepoGrid repos={repos} />}
    </Container>
  );
};

export default GitHubReposPage;
