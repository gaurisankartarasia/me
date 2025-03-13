
import React from 'react';
import { FileText } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Download } from 'lucide-react';
import { Radio } from 'lucide-react';

interface ResumeButtonProps {
  liveResumeLink: string;
  downloadResumeLink: string;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({
  liveResumeLink,
  downloadResumeLink,
}) => {
  const handleLiveResumeClick = () => {
    window.open(liveResumeLink, '_blank');
  };

  const handleDownloadResumeClick = () => {
    const link = document.createElement('a');
    link.href = downloadResumeLink;
    link.download = 'Gaurisankar_Resume_20250313.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <TooltipProvider>
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <button className='text-[#832c12] dark:text-[#e6d5c3]'>
                <FileText size={20} />
              </button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Download Resume</p>
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent className="w-42 bg-[#fefaf5] dark:bg-[#2a2420]">
          <DropdownMenuItem onClick={handleLiveResumeClick} className='text-[#832c12] dark:text-[#e6d5c3]'>
            <Radio/>
            View Live Resume
          </DropdownMenuItem>
          <DropdownMenuItem
          className='text-[#832c12] dark:text-[#e6d5c3]'
           onClick={handleDownloadResumeClick}
           >
<Download/>

            Download Resume
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  );
};

export default ResumeButton;



