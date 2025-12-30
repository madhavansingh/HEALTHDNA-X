import { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function RealtimeIndicator() {
  const [isLive, setIsLive] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    // Simulate real-time updates every 5 seconds
    const interval = setInterval(() => {
      setLastUpdate(new Date());
      setPulseKey(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <div className="relative">
              <Activity className="w-4 h-4 text-primary" />
              <span 
                key={pulseKey}
                className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-ping"
              />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full" />
            </div>
            <span className="text-xs font-medium text-primary hidden sm:inline">
              Live
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p className="text-xs">
            Real-time updates active<br />
            Last sync: {formatTime(lastUpdate)}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
