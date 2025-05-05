<?php

namespace Database\Seeders;

use App\Models\Meal;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MealSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $title = [
            'Orange juice',
            'Pizza',
            'Shrimp Soup',
            'Big Beef Burger',
            'Hot Coffee Latte',
            'Fresh Salad',
            'Premium Steak',
            'Fresh Chicken Veggies',
            'Grilled Chicken',
            'Panner Noodles',
            'Chicken Noodles',
            'Bread Boiled Egg',
            'Immunity Dish',

        ];
        $title_ar = [
            'شراب البرتقال',
            'بيتزا',
            'شوربة الروبيان',
            'برجر لحم بقري كبير',
            'لاتيه القهوة الساخنة',
            'سلطة فريش',
            'شريحة لحم',
            'خضروات دجاج طازجة',
            'دجاج مشوي',
            'معكرونة بانر',
            'نودلز الدجاج',
            'خبز بيض مسلوق',
            'طبق المناعة'
        ];
        $description = [
            'A drink rich in vitamin C and antioxidants, which produces a system and protects the body from diseases. It also helps improve heart health and digestion, as it provides contents from the Irish lands. In addition, in addition to promoting body health.',
            'Pizza is a popular Italian dish consisting of a thin dough base covered with sauce and cheese, and a variety of ingredients such as vegetables and meats can be added. It is baked in a hot oven until the base is crispy and the cheese is melted.',
            'Shrimp soup is a delicious dish consisting of a rich and flavorful broth, to which fresh shrimp and aromatic spices are added, giving it a delicious taste and a creamy texture. It is considered an ideal choice for seafood lovers.',
            'It is a delicious sandwich consisting of a large grilled beef patty, covered with melted cheese and fresh vegetables such as lettuce and tomatoes, served inside a soft burger bread with distinctive sauces that add a wonderful flavor.',
            'The ingredients combined are a coffee with milk or a latte, balanced and temptingly harmonious.',
            'Boil the sweet corn and leave it to cool. Prepare the rest of the ingredients (cucumber/tomato/bell pepper/onion/parsley). Add vegetable oil, lemon juice, salt, black pepper and mix well. Add the dressing to the ingredients and serve the salad.',
            'Premium steak is a high-quality cut of meat that is tender and rich in flavor, prepared from the finest cuts of beef and carefully grilled or cooked to achieve the perfect balance of juiciness and flavor. It is an ideal choice for meat lovers looking for a luxurious dining experience.',
            'It is a nutritious and delicious meal that contains many important nutrients that benefit human health.',
            'Grilled chicken is a rich source of high-quality proteins, vitamins and minerals, which promote muscle building and overall body health. It is also low in fat compared to other cooking methods, which helps maintain a healthy weight and improve energy levels.',
            'Paneer pasta is a good nutritional choice that can contribute to a healthy diet when eaten in moderation and with healthy ingredients.',
            'Chicken noodles are a good source of protein, which helps build muscle and promote recovery after exercise. They also contain vitamins and minerals that boost immune health and help improve digestion.',
            'Boiled egg toast can be part of a balanced diet that supports physical and mental health.',
            "The immune system boosts your body's health by providing essential nutrients that strengthen your immune system, such as vitamins, minerals, and antioxidants. Eating this dish regularly helps reduce your risk of disease and boost your ability to fight off infections."
        ];
        $description_ar = [
            'شراب البرتقال غني بفيتامين C ومضادات الأكسدة، مما يعزز جهاز المناعة ويحمي الجسم من الأمراض. كما يساعد في تحسين صحة القلب والهضم بفضل محتواه من الألياف والماء. بالإضافة إلى ذلك، يساهم في ترطيب الجسم وتعزيز صحة البشرة.',
            'البيتزا هي طبق إيطالي شهير يتكون من قاعدة رقيقة من العجين مغطاة بالصلصة والجبن، ويمكن إضافة مجموعة متنوعة من المكونات مثل الخضروات واللحوم. تُخبز في فرن ساخن حتى تصبح القاعدة مقرمشة والجبن ذائبًا. ',
            'حساء الروبيان هو طبق شهي يتكون من مرق غني ومليء بالنكهات، يُضاف إليه الروبيان الطازج والتوابل العطرية، مما يمنحه طعماً لذيذاً وقواماً كريميًا. يُعتبر خياراً مثالياً لمحبي المأكولات البحرية.',
            'هو ساندويتش لذيذ يتكون من شريحة لحم بقر كبيرة ومشوية، مُغطاة بالجبن الذائب والخضروات الطازجة مثل الخس والطماطم، وتُقدم داخل خبز برغر طري مع صلصات مميزة تضفي نكهة رائعة.',
            'المكونات مجتمعةً القهوة بالحليب أو اللاتيه، المتوازنة والمتجانسة بشكل مغري',
            'تعتبر السلطة الطازجة مصدرًا غنيًا بالفيتامينات والمعادن والألياف، مما يعزز صحة الجهاز الهضمي ويقوي المناعة. كما تساعد في تحسين صحة القلب وتقليل مخاطر الأمراض المزمنة بفضل محتواها المنخفض من السعرات الحرارية والدهون.',
            'ستيك بريميوم هو قطعة لحم عالية الجودة تتميز بطراوتها ونكهتها الغنية، تُحضر من أفضل قطع اللحم البقري وتُشوى أو تُطهى بعناية لتحقيق توازن مثالي بين العصارة والنكهة. يُعتبر خيارًا مثاليًا لعشاق اللحوم الذين يبحثون عن تجربة طعام فاخرة.',
            ' تعد وجبة مغذية ولذيذة تحتوي على العديد من العناصر الغذائية الهامة التي تعود بالفوائد على صحة الإنسان.',
            'يعتبر الدجاج المشوي مصدرًا غنيًا بالبروتينات عالية الجودة والفيتامينات والمعادن، مما يعزز بناء العضلات وصحة الجسم العامة. كما أنه قليل الدهون مقارنة بالطرق الأخرى للطهي، مما يساعد في الحفاظ على وزن صحي وتحسين مستويات الطاقة.',
            'معكرونة بانر خيارًا غذائيًا جيدًا يمكن أن يُساهم في نظام غذائي صحي عند تناولها بشكل معتدل ومع مكونات صحية.',
            'نودلز الدجاج تعتبر مصدرًا جيدًا للبروتين، مما يساعد في بناء العضلات وتعزيز الشفاء بعد التمارين. كما أنها تحتوي على الفيتامينات والمعادن التي تعزز من صحة الجهاز المناعي وتساهم في تحسين الهضم.',
            'خبز البيض المسلوق يمكن أن يكون جزءًا من نظام غذائي متوازن يدعم الصحة الجسدية والعقلية.',
            'طبق المناعة يعزز صحة الجسم من خلال توفير العناصر الغذائية الأساسية التي تقوي الجهاز المناعي، مثل الفيتامينات والمعادن ومضادات الأكسدة. يساعد تناول هذا الطبق بانتظام في تقليل خطر الإصابة بالأمراض وتعزيز القدرة على مواجهة العدوى.',
        ];

        for ($i = 0; $i <= 12; $i++) {
            Meal::create([
                'name' => $title[$i],
                'name_ar' => $title_ar[$i],
                'description' => $description[$i],
                'description_ar' => $description_ar[$i],
            ]);
        }
    }
}
