import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EasyForm from "./basic-form";
import ComplexForm from "./complex-form";

function App() {
  return (
    <Tabs defaultValue="easy-form" className="w-screen h-screen flex flex-col">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="easy-form">Form basic</TabsTrigger>
        <TabsTrigger value="complex-form">Form complex with array</TabsTrigger>
      </TabsList>
      <TabsContent value="easy-form" className="mt-0">
        <EasyForm />
      </TabsContent>
      <TabsContent value="complex-form" className="mt-0">
        <ComplexForm />
      </TabsContent>
    </Tabs>
  );
}

export default App;
