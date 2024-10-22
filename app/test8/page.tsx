import { getContent } from "./actions/action";
import Clock from "./components/Clock";
import { Country } from "./components/Country";
import Timestamp from "./components/Timestamp";

export default async function Test8() {

    const content = await getContent(2);

    return (
        <div>
            <h1>Test 8 - server based clock refreshed every second</h1>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2">
                    <span>Current time: </span>
                    <Clock />
                </div>
                <div className="flex flex-row gap-2">
                    <span>Time Gnerated:</span>
                    <Timestamp />
                </div>
                <div className="flex flex-row gap-2">
                    <span>User Country:</span>
                    <span><Country /></span>
                </div>

            </div>
            <div className="mt-4">
                <h2>Content:</h2>
                {content.map((item, index) => (
                    <div key={index} className="border border-gray-300 p-2 mt-2">
                        
                        <p>{item}</p>
                        </div>
                ))}

            </div>
        </div>
    )
}