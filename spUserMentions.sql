delimiter //

CREATE PROCEDURE spUserMentions
(userid int)
BEGIN
	select
			m.chirpid as 'Chirp Id',
			c.text as 'Chirp Text',
			c._created as 'Chirp Date'
	from mentions m 
	join chirps c on c.id = m.chirpid
	where c.userid = userid;
END//

delimiter ;