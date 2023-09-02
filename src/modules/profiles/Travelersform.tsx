import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function Travelersform() {
    return (
        <>
            <div className="bg-white p-10 rounded-md">
                <p className="text-3xl font-poppinsBold mb-5">Edit Profile</p>
                <Tabs className="font-poppinsRegular">
                    <TabList>
                        <Tab>Basic Info</Tab>
                        <Tab>Passport</Tab>
                    </TabList>

                    <TabPanel>
                        <div>Basic Information</div>
                        <p>Basic info, like your email and number that you use on Personal Profile</p>
                    </TabPanel>
                    <TabPanel>
                        <div>Passport Details</div>
                        <p>Add your Passport details for a faster flight booking experience</p>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
}