import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mic, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const VoiceChat = () => {
  return (
    <main className="min-h-screen bg-gradient-nature">
      <div className="container mx-auto px-4 py-8">
        {/* Header with back button */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="icon">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">വോയ്സ് ചാറ്റ് | Voice Chat</h1>
            <p className="text-muted-foreground">മലയാളത്തിൽ സംസാരിക്കുക | Speak in Malayalam</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-soft border-border">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Mic className="w-6 h-6 text-primary" />
                AI വോയ്സ് അസിസ്റ്റന്റ്
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center py-12">
                <Button variant="voice" size="lg" className="w-24 h-24 rounded-full mb-4">
                  <Phone className="w-8 h-8" />
                </Button>
                <p className="text-lg font-medium mb-2">സംസാരിക്കാൻ ടച്ച് ചെയ്ത് പിടിക്കുക</p>
                <p className="text-muted-foreground">Touch and hold to speak</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-center mb-4">സാമ്പിൾ ചോദ്യങ്ങൾ | Sample Questions:</h3>
                <Button variant="outline" className="w-full justify-start text-left">
                  "എന്റെ വയലിലെ വിള എങ്ങനെയുണ്ട്?"
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  "ഇന്നത്തെ കാലാവസ്ഥ എങ്ങനെയാണ്?"
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  "വിത്ത് എവിടെ കിട്ടും?"
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  "സബ്സിഡി എങ്ങനെ ലഭിക്കും?"
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default VoiceChat;