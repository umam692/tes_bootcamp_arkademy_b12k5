
<?php 
function biodata() 
{
			  $json_biodata = array(
				  'name' => 'Khairul Umam',
				  'age' => 24,
				  'address' => 'Kp. Bogor Desa Pusaka Rakyat Kecamatan Tarumajaya Kab. Bekasi',
				  'hobbies' => ['Membaca','main ps','berdiskusi'],
				  'is_married' => false,
				  'list_school' => array(
				  	'key name' => 'AMIK BSI Bekasi',
				  	'year_in' => '2013',
				  	'year_out'=> '2016',
				  	'major' => 'Manajemen Informatika',
				  ),
				  'skills' => array(
				  	'skill_name' => 'php',
				  	'level' => 'beginner'
				  ),
				  'interest_in_coding' => TRUE
			  );

			  return json_encode($json_biodata);
}

echo biodata();


 ?>